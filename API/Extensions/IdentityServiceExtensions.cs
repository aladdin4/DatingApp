namespace API.Extensions
{
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.IdentityModel.Tokens;
    using System.Text;

    /// <summary>
    /// Defines the <see cref="IdentityServiceExtensions" />
    /// </summary>
    public static class IdentityServiceExtensions
    {
        /// <summary>
        /// The AddIdentityServices
        /// </summary>
        /// <param name="services">The services<see cref="IServiceCollection"/></param>
        /// <param name="config">The config<see cref="IConfiguration"/></param>
        /// <returns>The <see cref="IServiceCollection"/></returns>
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            //Adding Authentication
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opts =>
                {
                    var tokenKey = config["TokenKey"] ?? throw new Exception("TokenKey not Configured");

                    opts.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            return services;
        }
    }
}
