using Microsoft.AspNetCore.Mvc;

namespace RestApi.Controllers
{
    [Route("rest")]
    public class RestController
    {
        [Route("{id}")]
        public string Get(int id)
        {
            return $"test {id}";
        }
    }
}
