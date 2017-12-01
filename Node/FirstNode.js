

var http=require('http');

var server= http.createServer(function(request,response){

   
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write("Open New Server");
    response.end();
});

server.listen(7000);
console.log("hey Server is listening");