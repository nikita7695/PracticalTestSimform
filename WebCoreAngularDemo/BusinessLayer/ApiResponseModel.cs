using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer
{
    public class ApiResponseModel
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }

    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class DropDown
    {
        public int ItemId { get; set; }
        public string ItemValue { get; set; }
    }


    public class UserLoginModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EmailID { get; set; }
        public int UserTypeID { get; set; }
        public string UserType { get; set; }
        public string access_token { get; set; }
        public string Stage { get; set; }
    }
}
