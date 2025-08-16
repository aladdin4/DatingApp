using API.Data;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers;

                                    //1ry ctor
public class UsersController(DataContext context) : BaseApiController
{


    [AllowAnonymous]
    [HttpGet]       // GET: api/users
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await context.Users.ToListAsync();
        return Ok(users);
    }

    [Authorize]
    [HttpGet("{id}")]     // GET api/users/5
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(int id)
    {
        var user = await context.Users.FindAsync(id);   //built-in method.
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
