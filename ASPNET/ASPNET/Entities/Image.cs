using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET.Entities
{
    public class Image
    {
            public int Id { get; set; }
            public string Url { get; set; }
            public string DateTime { get; set; }
            public string Name { get; set; }
           


            public Image(string url, string dateTime, string name)
            {
                Url = url;
                DateTime = dateTime;
                Name = name;
            }

    }
}
