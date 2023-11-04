const http = require('http');
const express = require('express');
const app = express();
const userRoute = require('./userRoute');
app.get('/', (req, res) => {
    res.json({ name: 'John', age: 30 });
});

app.use('/users', userRoute);

app.listen(3000);