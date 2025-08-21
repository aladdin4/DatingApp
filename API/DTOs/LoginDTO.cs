namespace API.DTOs
{
    /// <summary>
    /// Defines the <see cref="LoginDTO" />
    /// </summary>
    public class LoginDTO
    {
        /// <summary>
        /// Gets or sets the Username
        /// </summary>
        public required string Username { get; set; }

        /// <summary>
        /// Gets or sets the Password
        /// </summary>
        public required string Password { get; set; }
    }
}
