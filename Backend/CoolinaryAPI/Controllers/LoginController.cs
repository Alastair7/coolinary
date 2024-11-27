
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

namespace CoolinaryAPI.Controllers  
{
    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public LoginController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> getAuthencticationToken([FromBody] string codeToken )

        {
            try
            {

                if (string.IsNullOrEmpty(codeToken))
                {
                    return BadRequest("Code not found");
                }

                var tokenRequest = new {
                    grant_type = "authorization_code",
                    client_id = _configuration["AuthTokenSettings:ClientID"],
                    client_secret = _configuration["AuthTokenSettings:ClientSecret"],
                    code = codeToken,
                    redirect_uri  = _configuration["AuthTokenSettings:RedirectUri"]
                };
                var response = await _httpClient.PostAsJsonAsync
                    (_configuration["AuthTokenSettings:TokenEndpoint"],tokenRequest);


                if (!response.IsSuccessStatusCode)
                {
                    var error = await response.Content.ReadFromJsonAsync<AuthError>();
                    return BadRequest(error);
                } else
                {
                    var tokenResponse = await response.Content.ReadFromJsonAsync<TokenResponse>();
                    return Ok(tokenResponse);
                }
            }catch (Exception ex)
            {
                return StatusCode(500,new {error = "Error getting the token: ", ex.Message});
            }
            
        }
        
    }

    public class AuthError
    {
        [JsonPropertyName("error")]
        public  required string error { get; set; }

        [JsonPropertyName("error_description")]
        public required  string error_description { get; set; }
    }
}