const students = require('../models/Students');

const getStudentDetails = async (req, res) =>{
    var rollNo = req.params;
    let data;
    try {
        if(!rollNo){
            data = await students.find();
        } else {
            data = await students.find(rollNo);
            // res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    return res.status(200).json(data);
}

module.exports = getStudentDetails;