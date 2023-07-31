//Create Web Server
var express = require('express');
var app = express();
//Create HTTP server
var server = require('http').createServer(app);
//Create Socket.IO server
var io = require('socket.io').listen(server);
//Create Redis client
var redis = require('redis');
var redisClient = redis.createClient();
//Redis subscribe to channel
redisClient.subscribe('comments');
//Redis subscribe to channel
redisClient.on("message", function(channel, message) {
  console.log("mew message in queue "+ message + "channel");
  io.sockets.emit(channel, message);
});
//Start listening for incoming HTTP requests
server.listen(3000);

// Path: comments.js
//Create Web Server
var express = require('express');
var app = express();
//Create HTTP server
var server = require('http').createServer(app);
//Create Socket.IO server
var io = require('socket.io').listen(server);
//Create Redis client
var redis = require('redis');
var redisClient = redis.createClient();
//Redis subscribe to channel
redisClient.subscribe('comments');
//Redis subscribe to channel
redisClient.on("message", function(channel, message) {
  console.log("mew message in queue "+ message + "channel");
  io.sockets.emit(channel, message);
});
//Start listening for incoming HTTP requests
server.listen(3000);

// Path: comments.js
//Create Web Server
var express = require('express');
var app = express();
//Create HTTP server
var server = require('http').createServer(app);
//Create Socket.IO server
var io = require('socket.io').listen(server);
//Create Redis client
var redis = require('redis');
var redisClient = redis.createClient();
//Redis subscribe to channel
redisClient.subscribe('comments');
//Redis subscribe to channel
redisClient.on("message", function(channel, message) {
  console.log("mew message in queue "+ message + "channel");
  io.sockets.emit(channel, message);
});
//Start listening for incoming HTTP requests
server.listen(3000);

// Path: comments.js
//Create Web Server
var express = require('express');
var app = express();
//Create HTTP server
var server = require('http').createServer(app);
//Create Socket.IO server
var io = require('socket.io').listen(server);
//Create Redis client
var redis = require('redis');
var redisClient = redis.createClient