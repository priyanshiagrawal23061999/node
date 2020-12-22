const fs = require('fs');

const requestHandler = (req, res) => {
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
}

// 1st method of exporting module
module.exports = requestHandler;

// 2nd method of exporting modules
// module.exorts = {
    // handler: requestHandler,
    // someText: 'Some hard coded text'
// }

//3rd wy for exporting module
// module.exports.handler = requestHandler;
//module.exports.someText = 'Some hrd coded text';

// shortcut supportd by nodejs
// exports.handler = requestHandler;
// exports.someText = 'Some hrd coded text';