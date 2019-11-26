var express =  require("express");
var adminRouter = express();
var mysql=require("mysql");

adminRouter.get("/", (request, response)=>
{
    response.send("This is Admin Page");
});

adminRouter.get("/:ANo", (request, response)=>
{
    response.send("You searched for Admin No " + request.params.ANo);
});


adminRouter.post("/", (request, response)=>
{
    response.send("You inserted ");
});

module.exports = adminRouter;