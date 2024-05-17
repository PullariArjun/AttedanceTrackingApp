const Employe = require('../models/Employe');

const postemployee =  async(req, res) =>{
    try{
        let {name, employeeid,password} = req.body;

        let employee = new Employe({name, employeeid, password});
        console.log(employee)
        await employee.save();
        return res.send({success:true});
      
    } catch (err) {
        console.log(err.message);
        return res.send({success:false, error:err.message});
    }
  
}
module.exports = postemployee