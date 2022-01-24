using System;
using System.Collections.Generic;

#nullable disable

namespace BusinessLayer.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public int? CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal? Cost { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
