const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server');
});


// Connecting to MongoDB Database
mongoose.connect("mongodb+srv://michaelminglemas:MdF9rCNrRnik25Gh@programmer1.r3qa4nj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=programmer1")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

    })
    .catch(() => {
        console.log("Connection failed");
    });