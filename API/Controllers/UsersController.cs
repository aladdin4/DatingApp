using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
                                    //1ry ctor
public class UsersController(DataContext context) : ControllerBase
{

    // GET: api/users
    [HttpGet]
    public ActionResult<IEnumerable<AppUser>> GetUsers()
    {
        var users = context.Users.ToList();
        return Ok(users);
    }

    // GET api/users/5
    [HttpGet("{id: int}")]
    public ActionResult<IEnumerable<AppUser>> GetUser(int id)
    {
        var user = context.Users.Find(id);   //built-in method.
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
