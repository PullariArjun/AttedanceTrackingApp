const students = require('../models/Students');

const getstudentbyroll = async (req, res)=>{
    let rollNo = req.params.rollNo;
    rollNo = rollNo.toUpperCase();
    console.log(typeof(rollNo));
    let ans;
    try{
        console.log(rollNo);
        ans = await students.find({rollNo:{ $regex: rollNo }});
        console.log(ans)
        res.status(200).send(ans);
    } catch(err){
        res.status(400).send({msg:err.message})
    }
}
module.exports = getstudentbyroll