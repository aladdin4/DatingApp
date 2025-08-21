namespace API.DTOs;

/// <summary>
/// Defines the <see cref="UserDTO" />
/// </summary>
public class UserDTO
{
    /// <summary>
    /// Gets or sets the Username
    /// </summary>
    public required string Username { get; set; }

    /// <summary>
    /// Gets or sets the Token
    /// </summary>
    public required string Token { get; set; }
}
