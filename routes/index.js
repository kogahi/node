const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const loginController = require('../controllers/loginController')
const registController = require('../controllers/registController')
const homeController = require('../controllers/homeController')
const validator = require('../validates/validate')

router.get('/', loginController.getLogin)
router.get('/regist', registController.getRegist)
router.post('/home', validator, homeController.getLoggedin)

module.exports = router;