var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8888);

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

    if(url.substr(-9) == ".appcache") {
      res.writeHead(200, { 'Content-Type': 'text/cache-manifest' });
    } 
    else if(url == "/manifest.json") {
      console.log('Someone asking for the app manifest');
      res.writeHead(200, { 'Content-Type': 'application/x-web-app-manifest+json;' });
    } 
    else {
      res.writeHead(200);
    }
    res.end(data);
  });
}

var players = new Object();

io.sockets.on('connection', function (socket) {

  socket.on('join', function (data) {	
    console.log(data);
    data.time = new Date().getTime();
    data.id = socket.id;
    // send to user that just joined all data from other players
    socket.emit('start', { time:new Date().getTime(), players:players });
    // add new player
    players[socket.id] = data;
    // notify others of joined player
    socket.broadcast.emit('join', data );
  });
  
  socket.on('disconnect', function () {
    // notify others of disconnected player
    socket.broadcast.emit('disconnect', { player:socket.id, time: new Date().getTime() });
    // remove it from status
    delete players[socket.id];
  });


  socket.on('update', function (data) {	    
    players[socket.id] = data;
    data.id = socket.id;
    data.time = new Date().getTime();
  	console.log(data.name + " moved");
    // notify others of this user's movement
  	socket.broadcast.emit('update', data);
  });
	
  	

});
