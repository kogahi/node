const router = require('express').Router();
const loginController = require('../controllers/loginController')
const registController = require('../controllers/registController')

router.get('/', loginController.getLogin)
router.get('/regist', registController.getRegist)

module.exports = router;