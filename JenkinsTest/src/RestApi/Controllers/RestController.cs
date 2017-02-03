using Microsoft.AspNetCore.Mvc;

namespace RestApi.Controllers
{
    [Route("rest")]
    public class RestController
    {
        public virtual string[] Get()
        {
            var d = new WebDependency.Dependency();

            var s1 = d.Execute();

            return new[] {"hello",s1};
        }
    }
}
