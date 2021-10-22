const express = require("express");
const app = express();
const router = require('./routes/index');
// テンプレートエンジンの指定
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(3000);