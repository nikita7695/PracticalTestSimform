using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BusinessLayer
{
    public class TokenProvider
    {
        private readonly string jwtIssuer = "http://localhost:54859/";
        private readonly string jwtAudience = "http://localhost:54859/";
        private readonly string Secret = "IxrAjDoa2FqElO7IhrSrUJELhUckePEPVpaePlS_Xaw";

        public string GenerateToken(UserLoginModel userLoginModel)
        {
            try
            {
                var JWTToken = "";
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(Secret);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                  {
                          new Claim("UserId", Convert.ToString(userLoginModel.UserId)),
                  }),
                    Expires = DateTime.UtcNow.AddYears(1),//DateTime.UtcNow.AddMinutes(Convert.ToInt32(user.SessionTimeOut)),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                JWTToken = $"Bearer {tokenHandler.WriteToken(token)}";

                return JWTToken;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
