using BusinessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer
{
    public interface IProductService
    {
        List<Product> GetAllProducts();
        Product GetProductById(int productId);
        bool SaveProduct(Product product);
        bool DeleteProduct(int productId);
        List<DropDown> GetAllCategories();
    }
}
