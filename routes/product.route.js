const express = require("express");
const Product = require("../models/product.model.js");
const {
    getProducts,
    getProduct,
    storeProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller.js");
const { route } = require("express/lib/application");
const router = express.Router();

router.get('/', getProducts);

router.get('/', getProduct);

router.post('/', storeProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;