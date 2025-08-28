using API.Data;
using API.DTOs;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController(DataContext _ctx, ITokenService tokenService) : BaseApiController
    {
        // POST api/Account/register
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register([FromBody] RegisterDTO registerDTO)
        {
            if (await UserExists(registerDTO.Username))
            {
                return BadRequest("The Username is Taken");
            }

            //using to make it dispose as soon as it's done
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                UserName = registerDTO.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
            };

            _ctx.Users.Add(user);
            await _ctx.SaveChangesAsync();
            var userDto = new UserDTO
            {
                Username = user.UserName,
                Token = tokenService.CreateToken(user)

            };
            return Ok(userDto);
        }
        private async Task<bool> UserExists(string userName)
        {
            return await _ctx.Users.AnyAsync(user => user.UserName.ToLower() == userName.ToLower());
        }

        // POST api/Account/login
        [HttpPost("login")]
        public async Task<ActionResult<string>> Login([FromBody] LoginDTO loginDTO)
        {
            var user = await _ctx.Users.FirstOrDefaultAsync(user => user.UserName.ToLower() == loginDTO.Username.ToLower());
            if (user == null)
            {
                return Unauthorized("Username or Password Is Invalid");
            }
            var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Username or Password Is Invalid");
            }
            var token = tokenService.CreateToken(user);
            return Ok(new UserDTO { Username = user.UserName, Token = token });
        }
    }
}
