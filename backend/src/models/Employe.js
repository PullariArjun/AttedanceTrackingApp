const mongoose = require("mongoose");
let schema = new mongoose.Schema({
    name:{
        type:String
    },
    employeeid:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    }
})

module.exports = new mongoose.model("Teacher", schema)