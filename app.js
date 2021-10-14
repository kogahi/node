var express = require("express");
var app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    // レンダリングを行う
    res.render("./login.ejs");
});

app.get("/regist", function (req, res) {
    // レンダリングを行う
    res.render("./regist.ejs");
});

app.listen(3000);