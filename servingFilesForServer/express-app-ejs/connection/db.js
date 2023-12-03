//connect to mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:1234@lmscluster.tmbao5e.mongodb.net/akhileshdb');

const conn = mongoose.connection;

conn.on('connected', () => {
    console.log('connected to database');
});

module.exports = conn;