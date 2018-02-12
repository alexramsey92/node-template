var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/js/')));
app.use(express.static(path.join(__dirname, 'client/css')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Node/Express Testing Server Started on port ' + port);
});
