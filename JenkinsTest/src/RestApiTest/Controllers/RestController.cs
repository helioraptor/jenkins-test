using RestApi.Controllers;
using Xunit;

namespace RestApiTest.Controllers
{
    public class RestControllerTest
    {
        private readonly RestController controller;

        public RestControllerTest()
        {
            controller = new RestController();
        }

        [Fact]
        public void TestGet()
        {
            var result = controller.Get();

            Assert.Equal(result[1],"OK");
        }
    }
}
