using System.Text.Json.Serialization;

namespace CoolinaryAPI
{
    public class TokenResponse
    {
        [JsonPropertyName("acces_token")]
        public required string Token { get; set; }
        [JsonPropertyName("id_token")]
        public required string IdToken { get; set; }

        [JsonPropertyName("expires_in")]
        public  required int ExpiresIn{ get; set; }

    }
}
