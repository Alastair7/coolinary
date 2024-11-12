using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Microsoft.Extensions.Configuration;
namespace CoolinaryAPI.Controllers;

[ApiController]
[Route("login")]
public class LoginController : ControllerBase
{
    private readonly IConfiguration _config; // appsettings.json

    public LoginController(IConfiguration config)
    //s
    {
        _config = config;
    }


    [HttpPost("authenticate")]
    public IActionResult LoginTest([FromBody] LoginRequest request)
    {

        //Future refactor :D 
        // Check if the credencials are correct

        if (!request.Name1.Equals("Test") || !request.Password1.Equals("1234"))
        {
            return BadRequest(new { message = "Invalid credentials" }); // status 400 error
        }

        string jwtToken = GenerateToken(request.Name1, request.Password1);
        return Ok(new { token = jwtToken }); // status 200 GOOD 
    }

    private string GenerateToken(string name, string email)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.Name, name),
            new Claim(ClaimTypes.Email, email)
        };

        // Generate the key with the correct dimensions
        string jwtKey = _config.GetSection("JWT:Key").Value ?? string.Empty;
        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(jwtKey.PadRight(64, '0')));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

        // Generate token
        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(60),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
public class LoginRequest
{
    public required string Name1 { get; set; }
    public required string Password1 { get; set; }
}

