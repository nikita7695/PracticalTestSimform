using BusinessLayer.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BusinessLayer
{
    public class ProductService : IProductService
    {
        #region Methods

        public List<Product> GetAllProducts()
        {
            List<Product> products = new List<Product>();
            try
            {
                using (PracticalContext dbContext = new PracticalContext())
                {
                    products = dbContext.Products.ToList();
                }
            }
            catch (Exception ex)
            {

            }
            return products;
        }

        public Product GetProductById(int productId)
        {
            Product product = new Product();
            try
            {
                using (PracticalContext dbContext = new PracticalContext())
                {
                    product = dbContext.Products.Find(productId);
                }
            }
            catch (Exception ex)
            {

            }
            return product;
        }

        public bool SaveProduct(Product product)
        {
            bool result = false;
            try
            {
                using (PracticalContext dbContext = new PracticalContext())
                {
                    if (product.ProductId > 0)
                    {
                        var productDetails = dbContext.Products.Find(product.ProductId);
                        if (productDetails != null)
                        {
                            productDetails.CategoryId = product.CategoryId;
                            productDetails.Name = product.Name;
                            productDetails.Description = product.Description;
                            productDetails.Cost = product.Cost;
                        }
                    }
                    else
                    {
                        product.CreatedDate = DateTime.Now;
                        dbContext.Products.Add(product);
                    }
                    result = dbContext.SaveChanges() > 0 ? true : false;
                }
            }
            catch (Exception ex)
            {

            }
            return result;
        }
        public bool DeleteProduct(int productId)
        {
            bool result = false;
            try
            {
                using (PracticalContext dbContext = new PracticalContext())
                {
                    var productDetails = dbContext.Products.Find(productId);
                    if (productDetails != null)
                    {
                        dbContext.Products.Remove(productDetails);
                        result = dbContext.SaveChanges() > 0 ? true : false;
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return result;
        }

        public List<DropDown> GetAllCategories()
        {
            List<DropDown> categories = new List<DropDown>();
            try
            {
                using (PracticalContext dbContext = new PracticalContext())
                {
                    categories = dbContext.Categories.Select(x => new DropDown() { ItemId = x.CategoryId, ItemValue = x.CategoryName }).ToList();
                }
            }
            catch (Exception ex)
            {

            }
            return categories;
        }
        #endregion Methods
    }
}
