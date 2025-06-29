using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
                              //1ry ctor (new C# feature)
public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }
}
