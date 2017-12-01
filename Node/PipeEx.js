var fs=require("fs");

//var inputSource=fs.createReadStream(process.stdin);
//var outputSource=fs.createReadStream(process.stdout);

process.stdin.pipe(process.stdout);



