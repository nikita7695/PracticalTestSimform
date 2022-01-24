using BusinessLayer;
using BusinessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalSimforms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        #region Variables
        private readonly IProductService _productService;
        #endregion Variables

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("get-all-product")]
        public IActionResult GetAllProducts()
        {
            List<Product> productList = _productService.GetAllProducts();
            if (productList != null)
            {
                return Ok(new ApiResponseModel() { IsSuccess = true, Data = productList });
            }
            return BadRequest(new ApiResponseModel() { IsSuccess = false, Data = { }, Message = "Something went wrong, Please try again later." });
        }

        [HttpGet("get-product")]
        public IActionResult GetProductById(int productID)
        {
            Product product = _productService.GetProductById(productID);
            if (product != null)
            {
                return Ok(new ApiResponseModel() { IsSuccess = true, Data = product });
            }
            return BadRequest(new ApiResponseModel() { IsSuccess = false, Data = { }, Message = "Something went wrong, Please try again later." });
        }

        [HttpPost("save")]
        public IActionResult SaveProduct([FromBody] Product model)
        {
            bool result = _productService.SaveProduct(model);
            if (result)
            {
                return Ok(new ApiResponseModel() { IsSuccess = true, Data = { }, Message = "Product data saved successfully." });
            }
            return BadRequest(new ApiResponseModel() { IsSuccess = false, Data = { }, Message = "Error while saving product data." });
        }

        [HttpGet("delete-product")]
        public IActionResult DeleteProduct(int productId)
        {
            var result = _productService.DeleteProduct(productId);
            if (result)
            {
                return Ok(new ApiResponseModel() { IsSuccess = true, Message = "Product is deleted." });
            }
            else
            {
                return Ok(new ApiResponseModel() { IsSuccess = false, Message = "Error while deleting the product." });
            }
        }

        [HttpGet("get-all-category")]
        public IActionResult GetAllCategory()
        {
            List<DropDown> categoriesList = _productService.GetAllCategories();
            if (categoriesList != null)
            {
                return Ok(new ApiResponseModel() { IsSuccess = true, Data = categoriesList });
            }
            return BadRequest(new ApiResponseModel() { IsSuccess = false, Data = { }, Message = "Something went wrong, Please try again later." });
        }
    }
}
