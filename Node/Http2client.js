const http2=require('http2');
const client=http2.connect('http://localhost:7000/');
const req=client.request({':method':'GET',':path':'/'});

var message='';

req.on('response',(responseHeader)=>{

    console.log("respnse received");

});

req.on('data',(chunk)=>{
    
      message+=chunk;
      console.log("message"+message);
    
    });

    req.on('end',()=>{
        console.log("End");
        client.destroy();
    });
