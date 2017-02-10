using Xunit;
using RestApi.Controllers;

namespace RestApiTesting.Unit.RestApiTests.ControllerTests
{
    public class RestControllerTests
    {
        [Theory]
        [InlineData(1, "test 1")]
        [InlineData(23, "test 23")]
        [InlineData(-4, "test -4")]
        [InlineData(0, "test 0")]
        public void TestGet(int id, string expected)
        {
            var restController = new RestController();

            Assert.Equal(expected, restController.Get(id));
        }
    }
}