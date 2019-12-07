using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forms.Web.DAL;
using Forms.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace Forms.Web.Controllers
{
    public class ApiCityController : Controller
    {
        private ICityDAO cityDao;

        public ApiCityController(ICityDAO cityDao)
        {
            this.cityDao = cityDao;
        }

        [HttpGet]
        public ActionResult<List<City>> GetAll()
        {
            return cityDao.GetCities().ToList();
        }
    }
}