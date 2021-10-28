const { check } = require('express-validator')

module.exports = [
    check('name').not().isEmpty().withMessage('名前を入力してください。'),
    check('password').not().isEmpty().withMessage('パスワードを入力してください。'),
    check('password').isLength({ min: 7 }).withMessage('パスワードは7文字以上で設定してください。'),
    check('cfmPassword').
    custom((value, {req}) => {
         if(req.body.password === req.body.cfmPassword) {
             return true;
         }
     }).withMessage('確認用パスワードが不一致です。')
];