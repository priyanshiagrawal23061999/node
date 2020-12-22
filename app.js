const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('req.url',req.url, 'req.headers', req.headers, 'req.method', req.method)

    let url = req.url;
    let method = req.method
    if(req.url === '/'){
        res.write(`<html><head><title>Priyanshi</title></head>
        <body><form action = '/message' method = 'POST'>
        <input type='text' name = 'name'>
        <input type='email' name = 'email'>

        <button type='submit'>submit</button></form></body>
        </html>`)
        return res.end()
    };
    if(req.url === '/message' && req.method == "POST"){
        const body =[];
        // req.on() helps to listen to certain events.
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk)
        })
        return req.on("end", () => {
            // buffer is used to convert the chunks recieved into readable form.
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('&')[1]
            // fs.writeFileSync('message.txt', message);
            //writeFileSync() blocks the further code execution unless 
            //the file operation finishes. Therefore, we use writeFile() and 
            // pass the callback() to it.

            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end()
            })


        })
        // fs.writeFileSync('message.txt', 'DUMMY data');
        
    }
    res.setHeader('Content-Type', 'text/html');

    res.write('<html><head><title>Priyanshi</title></head></html>')
    res.end()
    // res.write()
    // process.exit()  
    /* we never use process.exit() 
    because we don't want our server to shut down.
    if we quit, people will not be able to access our website.
    */
});

server.listen(3000)