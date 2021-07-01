const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    name:String,
    email:String,
    phone:Number,
    message:String,
    
})

module.exports = mongoose.model('add' , contactusSchema , 'contactus')