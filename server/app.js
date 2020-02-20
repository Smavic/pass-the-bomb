// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//   res.send('<h1>Hello world</h1>');
// });

// io.on('connection', function (socket) {
//   console.log('a user connected');
// });

// http.listen(3000, function () {
//   console.log('listening on *:3000');
// });

const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000

const routes = require('./routes/index')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

app.listen(port, console.log(`server is running on ${port}`))

module.exports = app