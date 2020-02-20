var express = require('express');
var router = express.Router();
const checkConnectionController = require('../controllers/checkconnection')
const insertSingleDataController = require('../controllers/insertData')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/checkConnection', function (req, res) {
  checkConnectionController.checkConnection(req, res)
})

router.get('/insertSingle', function (req, res) {
  insertSingleDataController.insertSingleData(req, res)
})

module.exports = router;
