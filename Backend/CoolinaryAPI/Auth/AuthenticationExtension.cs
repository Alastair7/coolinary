using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace CoolinaryAPI.Auth;

public static class AuthenticationExtension
{
    internal static void AddAuth0(this IServiceCollection services, WebApplicationBuilder builder) 
    {
        var authBuilder = new AuthenticationBuilder(services);

        authBuilder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}";
                options.Audience = builder.Configuration["Auth0:Audience"];
                options.TokenValidationParameters = new TokenValidationParameters() 
                {
                    
                    ValidAudience = builder.Configuration["Auth0:Audience"],
                    ValidIssuer = $"{builder.Configuration["Auth0:Domain"]}",
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true
                };
            });
    }
}
