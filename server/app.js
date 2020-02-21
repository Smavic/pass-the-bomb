var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function (socket) {
  // console.log(socket);
  console.log('a user connected');
  // creating room
  // socket.on("create-room", function(data) {
  // })
  socket.on("join-game", function (urlId) {
    socket.join(urlId, function (err) {
      if (err) {
        throw new Error("Error joining room");
      }
      console.log(urlId);
    })
  })
  socket.on("hit", function (payload) {
    console.log(payload.hitPow);
    io.to(payload.urlId).emit('bomb-hit', payload.hitPow);
  })
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});