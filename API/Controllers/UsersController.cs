using API.Data;
using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
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
    public async Task<ActionResult<IEnumerable<AppUserDTO>>> GetUsers()
    {
        var users = await userRepo.GetUsersDTOAsync();
        return Ok(users);
    }

    // GET api/users/5
    [HttpGet("id/{id}")]     
    public async Task<ActionResult<IEnumerable<AppUserDTO>>> GetUser(int id)
    {
        var user = await userRepo.GetUserDTOByIdAsync(id);  
        return Ok(user);
    }
    // GET api/users/5
    [HttpGet(template: "user/{username}")]
    public async Task<ActionResult<IEnumerable<AppUserDTO>>> GetUser(string username)
    {
        var user = await userRepo.GetUserDTOByUsernameAsync(username);
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
