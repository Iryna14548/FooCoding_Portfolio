require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/contactModel');
const app = express();
const cors = require('cors');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3006;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// CORS Middleware to handle preflight requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//routes
app.get('/contacts', async (req, res) => {
    try {
        const { siteId } = req.query;
        if (!siteId) return res.status(400).json({ message: 'siteId is required' });

        const contactForms = await Contact.find({
            siteId: siteId,
        });
        res.status(200).json(contactForms);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

app.post('/contact', async (req, res) => {
    try {
        const contactForm = await Contact.create(req.body);
        res.status(200).json({ contactForm });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Error:', err);
    });

// ira14548
// Zg9qU5uDel0KGhHW
