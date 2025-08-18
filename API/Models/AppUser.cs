namespace API.Models;

public class AppUser
{
    //has to be public so EF can utilize it. If private, EF won't be able to use it.

    public int Id { get; set; }
    public required string UserName { get; set; }
    public required byte[]  PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }
    public int Age { get; set; }
    public string? KnownAs { get; set; }
}
