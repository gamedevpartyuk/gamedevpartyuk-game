var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8080);

function handler (req, res) {
  var url = req.url;

  if(url=="/") {
	url = "/index.html";
  }

  fs.readFile(__dirname + url,  
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

function createPlayer(id,name) {
	var player = new Object();
	player.id = id;
	player.name = name;
	return player;
}


var players = new Object();

io.sockets.on('connection', function (socket) {

  socket.on('join', function (data) {	
    console.log(data);
    var player = createPlayer(socket.id,data.name);
    socket.emit('start',{time:new Date().getTime(),players:players});
    players[player.id] = player;
    socket.broadcast.emit('join',{name:player.name,id:socket.id});
  });

  
  socket.on('disconnect', function () {   
    socket.broadcast.emit('disconnect',{player:socket.id});
    delete players[socket.id];
  });


  socket.on('update', function (data) {	    
    var player = players[socket.id];
	console.log(player.name + " moved");
	data.player = socket.id;
	data.time = new Date().getTime();
	socket.broadcast.emit('update',data);
  });
	
  	

});