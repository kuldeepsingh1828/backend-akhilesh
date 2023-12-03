//create a user Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number,
    gender: String
});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;