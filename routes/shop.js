const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello Buddy</h1>'); //send() automatically set headers content-type
    // to text/html
    });// use() helps to create middleware.


module.exports = router;
    
