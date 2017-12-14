var express = require('express');
var app = express();
var port = 3030;


// pass middleware functions in route
app.get('/', log, hello);

// app.use works as well
//app.use(log);

function log(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
};

function hello(req, res, next) {
  res.write('Hello \n' + 'world')
  res.end();
  next();
};

app.listen(port, function() {
    console.log("server started, port:", port)
});
