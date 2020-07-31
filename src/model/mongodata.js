const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema ;

const MongoSchema = new Schema({
    name:String,
    number:String,
    email:String,
    password:String

});


var mongodata = mongoose.model('mongdata',MongoSchema);

module.exports = mongodata



