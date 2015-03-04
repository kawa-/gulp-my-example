var compression = require('compression')
var express = require('express');
var app = express();
app.use(compression())
var http = require('http');
var server = http.createServer(app).listen(process.env.PORT || 3030);
  
// 開発ではsrcディレクトリをルートディレクトリとする
app.use(express.static(__dirname + '/src'));
  
console.log('http://localhost:' + (process.env.PORT || 3030));
