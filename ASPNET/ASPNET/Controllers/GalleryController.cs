using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNET.Entities;
using System.IO;
using System.Text;
using System.Text.Json;
using ASPNET.Model;

namespace ASPNET.Controllers
{
    public class GalleryController : Controller
    {
        [HttpPost]
        [Route("/PostImage")]
        public IActionResult  PostImage([FromBody] ImageModel image, [FromServices] ApplicationContext applicationContext)
        {
            try
            {
                string path = @$"wwwroot/Gallery/{image.Name}.png";
                string Bytes = image.Bytes;
                using (FileStream fileStream = new FileStream(path, FileMode.Create))
                {
                    using (BinaryWriter writer = new BinaryWriter(fileStream))
                    {
                        foreach (var x in Bytes.Split(' '))
                        {
                            writer.Write(byte.Parse(x));
                        }
                    }
                }
                var URL = $"Gallery/{image.Name}.png";
                var ImageEntity = new Image(URL, image.DateTime, image.Name);
                applicationContext.Images.Add(ImageEntity);
                applicationContext.SaveChanges();
                return new JsonResult(applicationContext.Images.OrderBy(item => item.Id).Last());
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return StatusCode(500);
            }
   
        }
        [HttpGet]
        [Route("/GetImages")]
        public IActionResult GetImages([FromServices] ApplicationContext applicationContext)
        {
            return new JsonResult(applicationContext.Images.OrderBy(item => item.Id).ToList());
        }
    }
}
