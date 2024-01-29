const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Use cors middleware
app.use(cors());

app.post('/register', (req, res) => {
    res.json('test ok');
});

app.listen(4000);