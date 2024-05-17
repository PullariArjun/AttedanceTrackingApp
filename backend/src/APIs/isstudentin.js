const Students = require("../models/Students");

const isstudentin = async(req, res) =>{
    const rollNo = req.params;
    console.log(rollNo+" called");
    console.log(rollNo);
    try{
        const ans = await Students.find({rollNo})
        console.log(ans);
        res.status(200).send(ans);

    } catch(err){
        return res.status(400).json({msg:'not inserted'})
    }
}
module.exports = isstudentin