// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema=mongoose.Schema
const EventSchema =new Schema({
    event:{
        type:String,
        required:true
    },    
    price:{
        type:String,
        required:true
    },
    eventpic:{
        type:String,
        required:true
    }
   
})
// export default mongoose.model('events',event)
module.exports = mongoose.model("events", EventSchema);