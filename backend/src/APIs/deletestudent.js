const Students = require("../models/Students");
const deletestudent=async(req,res)=> {
    try {
      const { id } = req.params;
      console.log(id)
      await ItemModel.findByIdAndDelete(id);
      res.json({ success: true, message: 'Item deleted successfully' });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ success: false, message: 'Error deleting item' });
    }
  };
  module.exports=deletestudent
  