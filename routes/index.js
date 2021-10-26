const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const loginController = require('../controllers/loginController')
const registController = require('../controllers/registController')
const homeController = require('../controllers/homeController')

router.get('/', loginController.getLogin)
router.get('/regist', registController.getRegist)
// router.post('/home', homeController.getLoggedin)
router.post('/home',  [
    check('name').not().isEmpty().withMessage('名前を入力してください。'),
    check('password').not().isEmpty().withMessage('パスワードを入力してください。'),
    check('password').isLength({ min: 7 }).withMessage('パスワードは7文字以上で設定してください。'),
    check('cfmPassword').
     custom((value, {req}) => {
         if(req.body.password === req.body.cfmPassword) {
             return true;
         }
     }).withMessage('確認用パスワードが不一致です。')
],
(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('regist',
      {name: req.body.name,
       password: req.body.password,
       cfmPassword: req.body.cfmPassword,
       errors: errors.errors});
    }
    homeController.getLoggedin(req,res)
    // ({
    //     username: req.body.username,
    //     password: req.body.password,
    //     cfmPassword: req.body.cfmPassword
    //   });
})

module.exports = router;