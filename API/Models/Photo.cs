﻿using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public required string Url { get; set; }
        public bool IsMain { get; set; }
        public string? PublicId { get; set; }
        public int AppUserId { get; set; }        // Foreign key follows the convention: <NavigationPropertyName>Id
        public AppUser AppUser { get; set; } = null!;    // Navigation back to AppUser
    }
}