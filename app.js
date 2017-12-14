var express = require('express');
var app = express();
var port = 3030;

/*
// with error callback
app.listen(port, function(err, res) {
  if (err) {
    console.log("server error")
  } else {
    console.log("server started, port:", port)
  }
});
*/

app.listen(port, function() {
    console.log("server started, port:", port)
});
