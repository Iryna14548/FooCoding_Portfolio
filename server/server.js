const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
    // allow cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.send({
        name: 'Iryna',
        age: 25,
    });
});

app.listen(3006, () => {
    console.log('Server is running on port 3006');
});
