const router = require('express').Router()
const playGame = require('./playgame')


router.use('/play', playGame)

module.exports = router