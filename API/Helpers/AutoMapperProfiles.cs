﻿using API.DTOs;
using API.Extensions;
using API.Models;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, AppUserDTO>()
                .ForMember(d => d.PhotoUrl, o => o.MapFrom(source => source.Photos.FirstOrDefault(x => x.IsMain)!.Url))
                .ForMember(d => d.Age     , o => o.MapFrom(source => source.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotoDTO>();
        }
    }
}
                                     