
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            //the name of the DBContext-inherited class
            builder.Services.AddDbContext<DataContext>(opts =>
            {                                                 //Adding CS to the DBContext, Same as API. So, eveything now is pointing to the same thing.
                opts.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            //services injection
            builder.Services.AddScoped<ITokenService, TokenService>();

            //Adding Authentication
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opts =>
                {
                    var tokenKey = builder.Configuration["TokenKey"] ?? throw new Exception("TokenKey not Configured");

                    opts.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            //Adding CORS Service
            builder.Services.AddCors();
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            // This is the middleware section


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
