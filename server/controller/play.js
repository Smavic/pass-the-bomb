const { Pemain } = require('../models')

class ControllerPemain {

  static inputNama(req, res, next) {
    let { nama } = req.body
    Pemain
      .create({ nama })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }


}

module.exports = ControllerPemain