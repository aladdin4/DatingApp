
using API.Data;
using Microsoft.EntityFrameworkCore;

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

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            // This is the middleware section
            app.MapControllers();

            app.Run();
        }
    }
}
