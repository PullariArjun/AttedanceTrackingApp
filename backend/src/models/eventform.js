const mongoose = require("mongoose");
const Schema=mongoose.Schema
const EventformSchema =new Schema({
    eventname:{
        type:String,
        required:true
    },    
    Startdate:{
        type:String,
        required:true
    },
    Noofdays:{
        type:String,
        required:true
    },
    Month:{
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Noofparticipants:{
        type:String,
        required:true
    }
   
})
// export default mongoose.model('events',event)
module.exports = mongoose.model("eventform", EventformSchema);