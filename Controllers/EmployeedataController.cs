using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using iAcess.Models;

namespace iAcess.Controllers
{
    public class EmployeedataController : ApiController
    {
        masterEntities dbContext = null;
        masterEntities dbContext1 = null;
        // Constructor   
        public EmployeedataController()
        {
            // create instance of an object  
            dbContext = new masterEntities();
            dbContext1 = new masterEntities();
           dbContext.Configuration.LazyLoadingEnabled = false;
           dbContext1.Configuration.LazyLoadingEnabled = false;
        }
        #region public HttpResponseMessage PostRequest(Request request)
        [Route("api/Employeedata/PostRequest")]
        [HttpPost]
        public HttpResponseMessage PostRequest(Request request)
        {
            HttpResponseMessage response;
           
            try
            {
                dbContext.Requests.Add(request);
                dbContext.SaveChanges();
                response = Request.CreateResponse(HttpStatusCode.OK, request);
            }
            catch (Exception e)
            {
               
                response = Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }
            return response;
        }
        #endregion

        #region HttpResponseMessage GetAccessID(int EmpID)
        [Route("api/Employeedata/GetAccessID/{EmpID}")]
        [HttpGet]
        public HttpResponseMessage GetAccessID(int EmpID)
        {
            HttpResponseMessage response;
            List<Accessgiven> given;
            //String[] result=new String[10];
            List<Access> result = new List<Access>();
            List<Access> output;
            
          
            try
            {
                given = dbContext.Accessgivens.Where(x => x.Empid == EmpID).ToList();
               output = dbContext1.Accesses.ToList();
                for (int i = 0; i < given.Count; i++)
                {
                    for(int j = 0; j < output.Count; j++)
                    {
                        if (given[i].Accessid == output[j].Id)
                        {
                            result.Add(output[j]);
                        }
                    }
                   
                }
                         
                response = Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception e)
            {
                response = Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }
            return response;
        }
        #endregion

        #region HttpResponseMessage GetAllAccess()
        [Route("api/Employeedata/GetAllAccess")]
        [HttpGet]
        public HttpResponseMessage GetAccess()
        {
            HttpResponseMessage response;
            List<Access> accessess = null;
            try
            {
                accessess = dbContext.Accesses.ToList();
                response = Request.CreateResponse(HttpStatusCode.OK, accessess);
            }
            catch (Exception e)
            {
                response = Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }
            return response;
        }
        #endregion

        #region HttpResponseMessage GetRequest(int EmpID)
        [Route("api/Employeedata/GetRequest/{EmpID}")]
        [HttpGet]
        public HttpResponseMessage GetRequest(int EmpID)
        {
            HttpResponseMessage response;
            List<Request> requests = null;
            try
            {
                requests = dbContext.Requests.Where(x=>x.Empid==EmpID).ToList();

                response = Request.CreateResponse(HttpStatusCode.OK, requests);
            }
            catch (Exception e)
            {
                response = Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }
            return response;
        }
        #endregion

    }
}
