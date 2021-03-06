﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngCore.Api.ViewModel.Account;
using AngCore.Api.ViewModel.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngCore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // POST: api/Login
        [HttpPost]
        public ActionResult Post([FromBody] LoginReq loginRq) =>
             Ok(new UserInfoRes { Id = 23, Name = "Raj Kumar", Address="New Delhi, 110092" });

        [HttpGet("helpline")]
        [Produces(typeof(string[]))]
        public ActionResult Get()
        {
            //return Ok(new string[] { "blog.raj111@gmail.com", "rajkrs@hotmail.com" });
            return Ok(new int[] { 1,2,3,4 });
        }


    }
}
