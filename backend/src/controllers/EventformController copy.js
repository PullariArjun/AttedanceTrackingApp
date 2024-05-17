// const Eventformdata =require('../models/eventform');

// //add product 
// const Addeventformdata = async(req, res, next)=>{
//    // console.log(req.body)

//   const {eventname,Startdate,Noofdays,Month,Year,Noofparticipants} =req.body
//   const even1 = new Eventformdata({
//       eventname,
//       Startdate,
//       Noofdays,
//       Month,
//       Year,
//       Noofparticipants     
//     })
//   try{
//       let eventsdata = even1.save()//for saving the data into the database
//       return res.status(200).json({ message: 'event successfully',eventsdata });
//   }catch(err){
//          return res.status(200).json({message:"not uploaded"})
//   }      
// }
// const Geteventformdata=async(req,res,next)=>{
//     let eventdata
//     try{
//        eventdata = await Eventformdata.find()
//     }
//     catch(err){
//        console.log(err)
//     }
//     if(!eventdata){
//        console.log("no events found")
//     }
//     // res.send("success")
//     return res.status(200).json({eventdata})
 
//   }
//   //delete
//   const Deleteeventformdata=async (req, res, next)=>{
//     const _id = req.params.id
//     let studentdata;
//     try{
//         studentdata = await student.findByIdAndRemove(_id);
//     }catch(err){
//         return console.log(err)
//     }
//     if(!studentdata){
//         return res.status(400).json({message:"Unable to delete the user."})
//     }
//     return res.status(200).json({messgae:"Succeesfully deleted."})
//  }
  

// // const Geteventdata = async(req,res,next)=>{
// //     console.log("getting data")
// //     let eventsdata; 
// //   try{
// //       eventsdata=await Eventdata.find();
// //       console.log("events" + " " + eventsdata);
// //       if(!eventsdata){
// //         return res.status(204).json({message:"no data found."})
// //     }
// //     return res.status(200).json(eventsdata)
// //   }catch(err){
// //       console.log(err);
// //   }
// // }
// // })

// // }
// // app.get('/getallevents',async(req,res,next)=>{
// //   let eventsdata; 
// //   try{
// //       eventsdata=await Events.find();
// //   }catch(err){
// //       console.log(err);
// //   }
// //   if(!eventsdata){

// //       return res.status(204).json({message:"no data found."})

// //   }
// //   return res.status(200).json(eventsdata)
// // })
// // exports.Geteventdata=Geteventdata;
// exports.Addeventformdata = Addeventformdata;
// exports.Geteventformdata = Geteventformdata;
// exports.Deleteeventformdata=Deleteeventformdata;




// eventformController.js

const Eventformdata = require('../models/eventform');

const Addeventformdata = async (req, res, next) => {
    const { eventname, Startdate, Noofdays, Month, Year, Noofparticipants } = req.body;
    const even1 = new Eventformdata({
        eventname,
        Startdate,
        Noofdays,
        Month,
        Year,
        Noofparticipants     
    });
    try {
        let eventsdata = await even1.save();
        return res.status(200).json({ message: 'Event added successfully', eventsdata });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to add event" });
    }
};

const Geteventformdata = async (req, res, next) => {
    try {
        const eventdata = await Eventformdata.find();
        if (!eventdata || eventdata.length === 0) {
            console.log("No events found");
            return res.status(404).json({ message: "No events found" });
        }
        return res.status(200).json({ eventdata });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred while fetching events" });
    }
};
//To Delete the data
const Deleteeventformdata = async (req, res, next) => {
    // const eventId = req.params.id;
    console.log(req.params.id)
    Eventformdata.findByIdAndDelete(req.params.id)
    .then(res => {
        res.send("deleted")
    })
    .catch(err => { 
        res.send("not deleted")
    })
//     //edit
const Geteventdata = async (req, res, next)=>{
        const _id = req.params.id
        let eventdata;
        try{
            eventdata= await Eventformdata.findById({_id});
            console.log(eventdata)
        }catch(err){
            return console.log(err)
        }
        if(!eventdata){
            return res.status(400).json({message:"No event Found."})
        }
        return res.status(201).json({eventdata})
     }

//      // update form by id
     const Updateeventformdata = async (req, res, next)=>{
        const _id = req.params.id
        const {eventname,Startdata,Noofdays,Month,Year,Noofparticipants} = req.body.formdata;
        let studdata;
        try{
            studdata = await Eventformdata.findByIdAndUpdate(_id,{
               eventname,
               Startdata,
               Noofdays,
               Month,
               Year,
               Noofparticipants
                
            });
        }catch(err){
            return console.log(err)
        }
        if(!studdata){
            return res.status(400).json({message:"Unable to update the users."})
        }
        return res.status(200).json({studdata})
     }



    // try {
    //     const deletedEvent = await Eventformdata.findByIdAndDelete(eventId);
    //     if (!deletedEvent) {
    //         return res.status(404).json({ message: "Event not found" });
    //     }
    //     return res.status(200).json({ message: "Event deleted successfully" });
    // } catch (error) {
    //     console.error('Error deleting event:', error);
    //     return res.status(500).json({ error: 'An error occurred while deleting event' });
    // }
};

// const Deleteeventformdata = async (req, res, next) => {
//     const id = req.params.id;
//     // console.log(user_ID)
//     await UserData.findByIdAndDelete({_id:id})
//     .then(() => {
//     res.status(200).json({ message: "User data deleted succeffully"});
//     console.log("data deleted succeffully");
//     })
//     .catch((er) => {
//     res.status(400).json({ message: "user data not deleted" });
//     console.log(er);
//     });
// }

module.exports = {
    Addeventformdata,
    Geteventformdata,
    Deleteeventformdata,
    Geteventdata,
    Updateeventformdata
};

