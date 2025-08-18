using API.Data;
using API.Extensions;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add "Extension Services" to the container.
            builder.Services.AddAppService(builder.Configuration);
            builder.Services.AddIdentityServices(builder.Configuration);
           
            var app = builder.Build();

            // Applies any pending migrations by default when app starts
            if (app.Environment.IsDevelopment())
            {
                using (var scope = app.Services.CreateScope())
                {
                    var dbContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                    dbContext.Database.Migrate();
                }
            }
            //Configure the HTTP request pipeline.
            //This is the middleware section
            //Ordering is important
            //CORS Middleware
            app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().WithOrigins("http://localhost:4200"));

            //We have to Authenticate First before Authorization.
            app.UseAuthentication();
            app.UseAuthorization();
            //End of middleware section
            app.MapControllers();

            app.Run();
        }
    }
}
