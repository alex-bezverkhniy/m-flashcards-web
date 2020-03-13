// server.js
var express = require('express');
var cors = require('cors')
// var path = require('path');
var serveStatic = require('serve-static');
var app = express();

// var corsOptions = {
//     origin: 'https://m-flashcards-api.herokuapp.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(cors())
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
// eslint-disable-next-line no-console
console.log('server started at '+ port);