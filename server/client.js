function Server(_serverUrl, _playerName, _startCallback, _playerJoinCallback, _playerUpdateCallback){
	this.serverUrl = _serverUrl;
	this.playerName = _playerName;
	this.startCallback = _startCallback; 
	this.playerJoinCallback = _playerJoinCallback;
	this.playerUpdateCallback = _playerUpdateCallback;
	
	this.socket = io.connect(this.serverUrl);
	var thisServer = this;
	
	this.socket.on('start', function(data) {
   		this.joinEndTime = new Date().getTime();
   		//calculate latency
   		this.joinLatency = this.joinEndTime-this.joinStartTime;
   		this.serverJoinTime = date.time;
   		//save the diference between local time and server time
   		this.serverDiffTime = new Date().getTime()-this.serverJoinTime;
   		this.startCallback();
  	});
  	
  	this.socket.on('join', function(data) {
  		thisServer.playerJoinCallback(data);
  	});
  	
  	this.socket.on('update', function(data) {
  		//update time to reflect the diff between server an local time
  		data.time = data.time + this.serverDiffTime; 
  		//call callback
  		thisServer.playerUpdateCallback(data);
  	});
  	
  	this.join(this.playerName);
}

Server.prototype.join = function(playerName){
	this.joinStartTime = new Date().getTime();
	this.joinStartTime = new Date().getTime();
	this.socket.emit('join', { name: name });
}

Server.prototype.update = function(updateEvent){
	this.socket.emit('update', updateEvent);
}

