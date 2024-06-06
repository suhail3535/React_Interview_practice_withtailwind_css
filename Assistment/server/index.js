const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { mongourl } = require("./db.js");
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const connection = mongoose.connect(mongourl)

// Models
const OrderSchema = new mongoose.Schema({
    buyerQty: Number,
    buyerPrice: Number,
    sellerPrice: Number,
    sellerQty: Number
});

const CompletedOrderSchema = new mongoose.Schema({
    price: Number,
    qty: Number
});

const Order = mongoose.model('Order', OrderSchema);
const CompletedOrder = mongoose.model('CompletedOrder', CompletedOrderSchema);

// Routes
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
});

app.get('/completedOrders', async (req, res) => {
    try {
        const completedOrders = await CompletedOrder.find();
        res.json(completedOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching completed orders', error });
    }
});


app.post('/order', async (req, res) => {
    let { type, qty, price } = req.body;

    try {
        let orders = await Order.find();

        if (type === 'buyer') {
            // Process buyer order
            let matchedOrder = orders.find(order => order.sellerPrice === price && order.sellerQty === qty);
            if (matchedOrder) {
                await CompletedOrder.create({ price: matchedOrder.sellerPrice, qty: matchedOrder.sellerQty });
                await Order.deleteOne({ _id: matchedOrder._id });
            } else {
                await Order.create({ buyerQty: qty, buyerPrice: price, sellerPrice: null, sellerQty: null });
            }
        } else {
            // Process seller order
            let matchedOrder = orders.find(order => order.buyerPrice === price && order.buyerQty === qty);
            if (matchedOrder) {
                await CompletedOrder.create({ price: matchedOrder.buyerPrice, qty: matchedOrder.buyerQty });
                await Order.deleteOne({ _id: matchedOrder._id });
            } else {
                await Order.create({ sellerQty: qty, sellerPrice: price, buyerPrice: null, buyerQty: null });
            }
        }

        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ message: 'Error processing order', error });
    }
});

// Delete order
app.delete('/order/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
});
// Delete order
app.delete('/CompletedOrder/:id', async (req, res) => {
    try {
        await CompletedOrder.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
});

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to DataBase");
    } catch (error) {
        console.log(error)
        console.log("Couldn't connect to DataBase");
    }
    console.log(`Server running on port ${port}`);
});
