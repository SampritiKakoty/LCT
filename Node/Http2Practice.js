//import { request } from 'https';


var http2=require('http2');

var server= http2.createServer();
server.on('stream',(stream,requestHeaders)=>{
    stream.respond({'status':200,'content-type':'text/plain'});
    stream.end('He he he');
});
server.listen(7000);
console.log("hey Server is listening");