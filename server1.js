//using connect module to create a web server

var connect = require('connect');
var app = connect(); //connect application

//middleware functions to handle GET request

//function 1
var logger = function(req, res, next) {
  console.log(req.method, req.url);

  next();
};

//function 2
var helloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};

//function 3
var goodbyeWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye World');
};

//mount the middleware functions with the connect application FIFO
app.use(logger);
//mount middleware on specific path 
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000); 

console.log('Server running at http://localhost:3000/');