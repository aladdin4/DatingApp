using API.Data;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers;

[Authorize]                             
public class UsersController(IUserRepo userRepo) : BaseApiController
{   
    // GET: api/users
    [HttpGet]       
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await userRepo.GetUsersAsync();
        return Ok(users);
    }

    // GET api/users/5
    [HttpGet("{id}")]     
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(int id)
    {
        var user = await userRepo.GetUserByIdAsync(id);  
        if (user == null) return NotFound($"User With ID {id} not found");
        return Ok(user);
    }

    // POST api/<UsersController>
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/<UsersController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<UsersController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
