var fs=require("fs");
var zlib=require("zlib");

var gzip=zlib.createGzip();
var rstream=fs.createReadStream('FirstNode.js');
var wstream=fs.createWriteStream('FirstNode.js.gz');

rstream
    .pipe(gzip)
    .pipe(wstream)
    .on('finish',function()
    { console.log("Done writing");
});
