using API.Data;
using API.Data.API.Data;
using API.Extensions;
using API.Middleware;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add "Extension Services" to the container.
            builder.Services.AddAppService(builder.Configuration);
            builder.Services.AddIdentityServices(builder.Configuration);
           
            var app = builder.Build();

         

            //Configure the HTTP request pipeline.
            //This is the middleware section
            //Ordering is important

            app.UseMiddleware<ExceptionMiddleware>();
            //CORS Middleware
            app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().WithOrigins("http://localhost:4200"));

            //We have to Authenticate First before Authorization.
            app.UseAuthentication();
            app.UseAuthorization();
            //End of middleware section
            app.MapControllers();      

            // Applies any pending migrations by default when app starts
            if (app.Environment.IsDevelopment())
            {
                using (var scope = app.Services.CreateScope())
                {
                    var dbContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                    var services = scope.ServiceProvider;
                    dbContext.Database.Migrate();
                    await Seed.SeedUsers(dbContext);
                }
            }

            app.Run();
        }
    }
}
