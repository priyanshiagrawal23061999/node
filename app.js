const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('req.url',req.url, 'req.headers', req.headers, 'req.method', req.method)

    let url = req.url;
    let method = req.method
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/'){
        res.write(`<html><head><title>Priyanshi</title></head>
        <body><form action = '/message' method = 'POST'>
        <input type='text' name = 'message'>
        <button type='submit'>submit</button></form></body>
        </html>`)
        return res.end()
    };
    if(req.url === '/message' && req.method == "POST"){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()
    }
    res.write('<html><head><title>Priyanshi</title></head></html>')
    // res.write()
    // process.exit()  
    /* we never use process.exit() 
    because we don't want our server to shut down.
    if we quit, people will not be able to access our website.
    */
});

server.listen(3000)