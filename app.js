// const http = require('http'); //express will automatically do
const routes = require('./routes');

const adminRoutes = require('./routes/admin')
const bodyParser = require('body-parser')
const express = require('express');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded()) // it registers a middleware 
//console.log(routes.someText)
//  statement for 2nd method of export

app.use(adminRoutes);
// const server = http.creteServer(routes.requestHndler)

// next() --> allows the request to next middleware in the line

app.use('/', (req, res, next) => {
res.send('<h1>Hello Express</h1>'); //send() automatically set headers content-type
// to text/html
});// use() helps to create middleware.

// const server = http.createServer(routes);
// const server = http.createServer((req,res) => {
//     // console.log('req.url',req.url, 'req.headers', req.headers, 'req.method', req.method)

   
// });


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('App is running on port', port)
}); // express automatically create server and listen on port 3000
// const server = http.createServer(app);

// server.listen(3000)