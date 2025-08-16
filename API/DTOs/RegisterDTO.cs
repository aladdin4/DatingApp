using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required] // this required flag is to prevent username or pw as "" 
        public required string Username { get; set; }
        [Required]
        public required string Password { get; set; }
    }
}
