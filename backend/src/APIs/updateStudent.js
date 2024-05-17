const students = require('../models/Students');

const updateStudent = async(req, res) =>{
    const id = req.params.id;
    const data = req.body;

    try {
        const result = await students.updateOne(
            {_id:ObjectId(id)},
            {$set:{data}});
        return res.status(200).json({message:'Successfully updated'})
    } catch (error) {
        console.error('error occured while updating', error.message);
        return res.status(404).json({message:'Error occured'})
    }
}

module.exports = updateStudent;