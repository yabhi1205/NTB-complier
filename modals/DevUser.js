const mongoose = require('mongoose');
const { Schema } = mongoose;

const DevUserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type : String,
        unique: true,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
  });

module.exports = mongoose.model('devuser',DevUserSchema);