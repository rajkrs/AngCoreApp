using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        [HttpGet("company")]
        public ActionResult Get(string userName, string password) 
            => Ok(new string[] { "BMS", "RSI", "AAPC", "ELI", "Capricorn" });
         

        [HttpPost]
        public ActionResult Post(string userName, string password) {
            return Ok(true);
        }

    }
}