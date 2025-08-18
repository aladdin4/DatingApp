using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {                         
        public static IServiceCollection AddAppService(this IServiceCollection services, IConfiguration config)
        {
            services.AddControllers();
            //the name of the DBContext-inherited class
            services.AddDbContext<DataContext>(opts =>
            {   
                //Adding CS to the DBContext, Same as API. So, eveything now is pointing to the same thing.
                opts.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });

            //Adding CORS Service
            services.AddCors();

            //services injection
            services.AddScoped<ITokenService, TokenService>();


            return services;
        }
    }
}
