using API.Models;
using Bogus;
using Bogus.DataSets;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using static Bogus.DataSets.Name;
using static System.Net.WebRequestMethods;

namespace API.Data
{
    namespace API.Data
    {
        public static class Seed
        {
            public static async Task SeedUsers(DataContext context)
            {
                if (await context.Users.CountAsync() > 20) return;

                var faker = new Faker();
                var users = new List<AppUser>();
                var maleCounter = 1;
                var femaleCounter = 1;
                for (int i = 0; i < 40; i++)
                {
                    // Generate password hash/salt

                    var gender = faker.PickRandom(new[] { "male", "female" });
                    if (gender == "male")
                    {
                        var user = CreateNewUser(faker, "male", maleCounter);
                        maleCounter += 3;
                        if (maleCounter > 70) maleCounter = 1;
                        users.Add(user);

                    }
                    else
                    {
                        var user = CreateNewUser(faker, "female", femaleCounter);
                        femaleCounter += 3;
                        if (femaleCounter > 70) femaleCounter = 1;
                        users.Add(user);
                    }
                }
                await context.Users.AddRangeAsync(users);
                await context.SaveChangesAsync();
            }


            private static AppUser CreateNewUser(Faker faker, string gender, int counter)
            {
                using var hmac = new HMACSHA512();
                var name = faker.Name.FullName(gender == "male" ? Gender.Male : Gender.Female);
                var firstName = name.Split(' ')[0];
                var lastName = name.Split(' ')[1];
                var user = new AppUser
                {
                    UserName = faker.Internet.Email(firstName, lastName).ToLower(),
                    KnownAs = name, 
                    Gender = gender,
                    DateOfBirth = DateOnly.FromDateTime(faker.Date.Past(50, DateTime.Now.AddYears(-18))),
                    City = faker.Address.City(),
                    Country = faker.Address.Country(),
                    Interests = faker.Lorem.Sentence(),
                    Introduction = faker.Lorem.Paragraph(),
                    LookingFor = faker.Lorem.Sentence(),
                    Created = faker.Date.Past(5),
                    LastActive = faker.Date.Recent(30),
                    PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd")),
                    PasswordSalt = hmac.Key,
                    Photos =
                            new List<Photo>
                            {
                                new Photo
                                {
                                    Url = $"https://xsgames.co/randomusers/assets/avatars/{gender}/{counter}.jpg",
                                    IsMain = true,
                                },
                                new Photo
                                {
                                    Url = $"https://xsgames.co/randomusers/assets/avatars/{gender}/{counter+1}.jpg",
                                    IsMain = false,
                                },
                                new Photo
                                {
                                    Url = $"https://xsgames.co/randomusers/assets/avatars/{gender}/{counter+2}.jpg",
                                    IsMain = false,
                                },
                            }
                };
                return user;
            }
        }
    }
}

