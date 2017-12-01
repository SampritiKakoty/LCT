var http=require('http');

var url=require('url');

var server= http.createServer(function(request,response){

    console.log("Check Request"+request.url)

    queryString=url.parse(request.url,true).query;
    console.log("queryString",queryString);


   if(request.url=='/'){
    response.write("Root Server"); 
    
   }

  else if(request.url=='/contact'){
    response.write("<h1>contact Me</h1>"); 
   // response.end();
   }
   
   else{
  // response.writeHead(200,{'Content-type':'text/plain'});
    response.write("Any page");
    //response.end();
}
  

setTimeout(function()
{
    response.write("Write Slowly");
    response.end();
}
,3000);
});

server.listen(7000);
console.log("hey Server is listening");