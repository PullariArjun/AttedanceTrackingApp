const Eventdata =require('../models/event');

//add product 
const Addeventdata = async(req, res, next)=>{
  const eventpic=(req.file)? req.file.filename:null
  console.log(req.file)
  const {event,price} =req.body
  const even = new Eventdata({
      event,
      price,
      eventpic     
    })
  try{
      let eventsdata = even.save()//for saving the data into the database
      return res.status(200).json({ message: 'event successfully',eventsdata });
  }catch(err){
         return res.status(200).json({message:"not uploaded"})
  }      
}


const Geteventdata = async(req,res,next)=>{
    console.log("getting data")
    let eventsdata; 
  try{
      eventsdata=await Eventdata.find();
      console.log("events" + " " + eventsdata);
      if(!eventsdata){
        return res.status(204).json({message:"no data found."})
    }
    return res.status(200).json(eventsdata)
  }catch(err){
      console.log(err);
  }
}
// })

// }
// app.get('/getallevents',async(req,res,next)=>{
//   let eventsdata; 
//   try{
//       eventsdata=await Events.find();
//   }catch(err){
//       console.log(err);
//   }
//   if(!eventsdata){

//       return res.status(204).json({message:"no data found."})

//   }
//   return res.status(200).json(eventsdata)
// })
exports.Geteventdata=Geteventdata;
exports.Addeventdata = Addeventdata;