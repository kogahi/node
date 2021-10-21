const express = require('express');
const Views = '../views/'

module.exports = {
    getLogin: function(req, res) {
        res.render(Views + 'login.ejs');
    }
}