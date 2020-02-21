const controllerPlay = require('../controller/play')
const router = require('express').Router()

router.post('/input', controllerPlay.inputNama)
// router.get('/game', controllerUser.playGame)
// router.post('/game', controllerUser.playGame)


module.exports = router