//express module application object
var express = require('express');
var app = express();

//mount middleware function with a specific path
app.use('/', function(req, res) {
	
	//.send() is a wrapper that sets the res.header content-type according to response obj type and sends response using res.end()
  res.send('Hello World');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

//to load and test express application
module.exports = app;