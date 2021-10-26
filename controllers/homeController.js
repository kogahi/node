const express = require('express');
const Views = '../views/'

module.exports = {
    getLoggedin: function(req, res) {
        res.render(Views + 'home.ejs', {req:req});
    }
}