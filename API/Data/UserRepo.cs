using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepo (DataContext context, IMapper mapper) : IUserRepo
    {
        public void Update(AppUser user)
        {
            context.Entry(user).State = EntityState.Modified;
        }
        public async Task<bool> SaveAllAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        /// <summary>
        /// Users
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await context.Users
            .Include(p => p.Photos)
            .ToListAsync();
        }
        public async Task<IEnumerable<AppUserDTO>> GetUsersDTOAsync()
        {
            return await context.Users.ProjectTo<AppUserDTO>(mapper.ConfigurationProvider)
                .ToListAsync();
        }

        /// <summary>
        /// User by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<AppUser?> GetUserByIdAsync(int id)
        {
            return await context.FindAsync<AppUser>(id);
        }
        public async Task<AppUserDTO?> GetUserDTOByIdAsync(int id)
        {
            return await context.Users
                .Where(user => user.Id == id)
                .ProjectTo<AppUserDTO>(mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        /// <summary>
        /// User by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public async Task<AppUser?> GetUserByUsernameAsync(string username)
        {
            return await context.Users
                .Include(p => p.Photos)
                .SingleOrDefaultAsync(user => user.UserName == username);
        }
        public async Task<AppUserDTO?> GetUserDTOByUsernameAsync(string username)
        {
            return await context.Users
               .Where(user => user.UserName == username)
               .ProjectTo<AppUserDTO>(mapper.ConfigurationProvider)
               .SingleOrDefaultAsync();
        }
    }
}
