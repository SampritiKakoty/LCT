var stream=require("stream");
var net = require("net");

net.createServer(function(socket){
console.log("client connected");
socket.write("G and type");
socket.on("readable",function(){

    process.stdout.write(this.read())

});

})
.listen(8088,function(){
    console.log("server bounded");
})