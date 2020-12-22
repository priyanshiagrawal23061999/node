const http = require('http');
const routes = require('./routes');

//console.log(routes.someText)
//  statement for 2nd method of export
// const server = http.creteServer(routes.requestHndler)

const server = http.createServer(routes);
// const server = http.createServer((req,res) => {
//     // console.log('req.url',req.url, 'req.headers', req.headers, 'req.method', req.method)

   
// });

server.listen(3000)