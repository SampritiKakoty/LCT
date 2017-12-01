var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/socket.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log("dkfk;lfk;lk................1");
    io.emit('chat message', msg);
  });
socket.on('chat message', function(){
  console.log("dkfk;lfk;lk");
     io.emit('chat message', 'Will respond to you');
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});