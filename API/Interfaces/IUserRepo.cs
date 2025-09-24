using API.DTOs;
using API.Models;

namespace API.Interfaces
{
    public interface IUserRepo
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();

        // Users
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<IEnumerable<AppUserDTO>> GetUsersDTOAsync();

        // User by id
        Task<AppUser?> GetUserByIdAsync(int id);
        Task<AppUserDTO?> GetUserDTOByIdAsync(int id);

        // User by username
        Task<AppUser?> GetUserByUsernameAsync(string username);
        Task<AppUserDTO?> GetUserDTOByUsernameAsync(string username);
    }
}
