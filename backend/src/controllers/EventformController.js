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
}
//     //edit
const Geteventdata1 = async (req, res, next)=>{
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

exports.Addeventformdata = Addeventformdata;
exports.Geteventformdata = Geteventformdata;
exports.Deleteeventformdata = Deleteeventformdata;
exports.Geteventdata1 = Geteventdata1;
exports.Updateeventformdata = Updateeventformdata;