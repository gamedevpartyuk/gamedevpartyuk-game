var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

function createPlayer(socket_id,name) {
	var player = new Object();
	player.socket_id = socket_id;
	player.name = name;
	return player;
}


var players = new Object();

io.sockets.on('connection', function (socket) {
  socket.on('join', function (data) {	
    console.log(data);
    var player = createPlayer(socket.id,data.name);
    players[player.socket_id] = player;
    socket.emit('join',{time:new Date().getTime()});
    socket.broadcast.emit('news',player.name + " joined!!");
  });

  socket.on('event', function (data) {	
    
    var player = players[socket.id];
	console.log(player.name + " moved");
	socket.broadcast.emit('news',player.name + " moved");
  });
	
  	

});