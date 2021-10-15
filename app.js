const express = require("express");
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//     // レンダリングを行う
//     res.render("./login.ejs");
// });

// app.get("/regist", function (req, res) {
//     // レンダリングを行う
//     res.render("./regist.ejs");
// });

let loginRouter = require('./routes/login');
app.use('/', loginRouter);

let registRouter = require('./routes/regist');
app.use('/regist', registRouter);

app.listen(3000);