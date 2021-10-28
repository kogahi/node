const express = require('express');
const Views = '../views/'

module.exports = {
    getRegist: function(req, res) {
        res.render(Views + 'regist.ejs',{name:'', password: '', cfmPassword: '', errors: ''});
    }
}