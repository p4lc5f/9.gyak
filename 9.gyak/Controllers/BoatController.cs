using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _9.gyak.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        [HttpGet]
        [Route("questions/all")]
        public IActionResult MindegyHogyHivjak()
        {
            Models.HajosContext context = new Models.HajosContext();
            var kérdések = from x in context.Questions select x.Question1;

            return Ok(kérdések);
        }
    }
}