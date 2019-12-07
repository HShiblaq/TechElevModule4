using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShoppingListAPI.Models;
using ShoppingListAPI.Services;

namespace ShoppingListAPI.Controllers
{
    [Route("api/groceries")]
    [ApiController]
    public class ShoppingLIstController : ControllerBase
    {
        private readonly IDataAccessLayer<Item> dal;

        public ShoppingLIstController(IDataAccessLayer<Item> dataAccessLayer) {
            dal = dataAccessLayer;
        }

        [HttpGet]
        public List<Item> GetAll()
        {
            return dal.GetAll();
        }

        [HttpGet("{id}", Name = "GetItem")]
        public ActionResult<Item> GetItem(int id)
        {
            Item item = dal.Get(id);
            if ( item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public ActionResult Create([FromBody] Item item)
        {

            dal.Add(item);
            //Status 200
            return Ok();

        }

        [HttpPut("{id}")]
        public ActionResult Update(int id, Item updatedItem)
        {
            //FROM DAL public void Update(Item item) SO IT TAKES ONE ITEM 
            dal.Update( updatedItem);
            return Ok(); 
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            dal.Delete(id);
            return Ok();
        }
    }
}