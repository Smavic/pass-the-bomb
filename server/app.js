<<<<<<< HEAD
// if (process.env.NODE_ENV === "development") {
//   require('dotenv').config()
// }
=======
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors = require('cors');

app.use(cors());
>>>>>>> 7d3e5393af1238c35d798a452e618d92e056d5d4

const express = require('express')
const app = express()
const cors = require('cors')
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const port = process.env.PORT || 3000

const routes = require('./routes/index')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

io.on('connection', function (socket) {
<<<<<<< HEAD
  console.log('socket connected <=====================')
  socket.on('hitPush', function (params) {
    io.emit('pengurangHit', params)
    console.log(params, '<<<<<<<<< ini dari client di server ')
  })
})

server.listen(port, console.log(`server is running on ${port}`))
=======
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
>>>>>>> 7d3e5393af1238c35d798a452e618d92e056d5d4

module.exports = app