const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middlewares
app.use(express.json()); // for parsing application/json
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
app.get('/contact', (req, res) => {
    // allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.send({
        name: 'Iryna2',
        age: 25,
    });
});

app.post('/contact', (req, res) => {
    // allow cors for post
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    console.log(req.body);
    console.log('Contact form submitted');
    res.send('Contact form submitted');
});

mongoose
    .connect(
        'mongodb+srv://ira14548:Zg9qU5uDel0KGhHW@formsubmissionsapi.8bauwk7.mongodb.net/Node-API?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3006, () => {
            console.log('Server is running on port 3006');
        });
    })
    .catch((err) => {
        console.log('Error:', err);
    });

// ira14548
// Zg9qU5uDel0KGhHW
