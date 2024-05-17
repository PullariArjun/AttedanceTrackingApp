const Students = require('../models/Students');

const postStudent =  async(req, res) =>{
    try{
        let {name, rollNo, college, branch, course} = req.body;

        let student = new Students({name, rollNo, college, branch, course});
        console.log(student)
        await student.save();
        return res.send({success:true});
      
    } catch (err) {
        console.log(err.message);
        return res.send({success:false, error:err.message});
    }
  
}
module.exports = postStudent