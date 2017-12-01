//import { dirname } from "path";

var fs= require("fs");
var data;

var readStream=fs.createReadStream('FirstNode.js');
var writeStream=fs.createWriteStream(__dirname+'output.js')
var writeStream=fs.createWriteStream('output.js');
readStream.setEncoding('UTF-8');
//writeStream.setEncoding('UTF-8');

readStream.on('data',function(chunk)
{
    console.log("reading"+chunk.length,'bytes');
    writeStream.write(chunk,'UTF-8') ;
    data+=chunk;


});

readStream.on('end',function(){
console.log("data:::"+data);
writeStream.end();
}
);

readStream.on('error',function(err)
{console.log("err:::"+err.stack);}
);

writeStream.on('error',function(err)
{console.log("err:::"+err.stack);}
);

writeStream.on('finish',function(){
    console.log("write data:::");
    
    }
    );
console.log("Program ended");





