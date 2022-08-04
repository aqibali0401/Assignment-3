const express = require('express');
const router = express.Router();
const Product = require('../models/product')

// Display all the products
router.get('/products', async(req, res) => {

    const products = await Product.find({});
    console.log(products);
    // res.send(products);
    res.render('index',{products});
    
});

// get he form to create a new product
router.get('/products/new', (req, res) => {
    res.render('new');
})

// Creating a new product in a db
router.post('/products', async(req, res)  => {

    const {name, price, desc } = req.body;
    await Product.create({name, price, desc});

    res.redirect('/products');
})

// show Product
router.get('/products/:productid', async(req, res) => {
    const {productid} = req.params;
    const product = await Product.findById(productid);
    res.render('show', {product});
});

// Render the edit form
router.get('/products/:productid/edit', async(req, res) => {

    const {productid} = req.params;
    const product = await Product.findById(productid);
    res.render('edit', {product});

})

// Update product
router.patch('/products/:productid', async(req, res) => {

     const { productid } = req.params;
     const { name, price, desc } = req.body;
     await Product.findByIdAndUpdate(productid, { name, price, desc });
     res.redirect(`/products/${productid}`);

})

// Delete product
router.delete('/products/:productid', async(req, res) => {

    const { productid } = req.params;
    await Product.findByIdAndDelete(productid);
    res.redirect('/products');

})


module.exports = router;