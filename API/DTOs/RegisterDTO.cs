namespace API.DTOs
{
    using System.ComponentModel.DataAnnotations;

    /// <summary>
    /// Defines the <see cref="RegisterDTO" />
    /// </summary>
    public class RegisterDTO
    {
        /// <summary>
        /// Gets or sets the Username
        /// </summary>
        [Required] // this required flag is to prevent username or pw as "" 
        public required string Username { get; set; }

        /// <summary>
        /// Gets or sets the Password
        /// </summary>
        [Required]
        public required string Password { get; set; }
    }
}
