const express = require('express');
const router = express.Router();


router.use('/add-product', (req, res, next) => {
    console.log('in another middleware')
    res.send(`<form action = "/product" method="POST"><input type = "text" name ="title">
    <button type ="submit"> Add Product</button>
    </form>`); //send() automatically set headers content-type
    // to text/html
    });
router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router

