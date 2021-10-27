const express = require('express');
const { validationResult } = require('express-validator');
const Views = '../views/'

module.exports = {
    getLoggedin: function(req, res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
         res.render('regist',
            {name: req.body.name,
            password: req.body.password,
            cfmPassword: req.body.cfmPassword,
            errors: errors.errors});
        }
        res.render(Views + 'home.ejs', {req:req});
    }
}