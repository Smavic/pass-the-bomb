// if (process.env.NODE_ENV === "development") {
//   require('dotenv').config()
// }

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
  console.log('socket connected <=====================')
  socket.on('hitPush', function (params) {
    io.emit('pengurangHit', params)
    console.log(params, '<<<<<<<<< ini dari client di server ')

  })
})

server.listen(port, console.log(`server is running on ${port}`))

module.exports = app