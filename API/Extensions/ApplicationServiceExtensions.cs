namespace API.Extensions
{
    using API.Data;
    using API.Interfaces;
    using API.Services;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;

    /// <summary>
    /// Defines the <see cref="ApplicationServiceExtensions" />
    /// </summary>
    public static class ApplicationServiceExtensions
    {
        /// <see cref="IServiceCollection"/></returns>
        /// <summary>
        /// The AddAppService
        /// </summary>
        /// <param name="services">The services<see cref="IServiceCollection"/></param>
        /// <param name="config">The config<see cref="IConfiguration"/></param>
        /// <returns>The <see cref="IServiceCollection"/></returns>
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

            //Repos injection
            services.AddScoped<IUserRepo, UserRepo>();

            //Mapper injection
            services.AddAutoMapper(
                cfg =>
                {
                    /* optional config, mandatory param */
                },
                AppDomain.CurrentDomain.GetAssemblies()
            );

            return services;
        }
    }

}
