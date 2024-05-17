const express =require('express');
const Router = express.Router();
const EventformController =require("../controllers/EventformController")
// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, 'public/images')
//     },
//     filename: function (req, file, callback) {
//       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       callback(null, Date.now()+"_"+file.originalname)
//     }
//   })
// const upload = multer({ storage: storage })

Router.post('/addeventform',EventformController.Addeventformdata)
Router.get('/getevent',EventformController.Geteventformdata)
Router.delete('/deleteevent/:id',EventformController.Deleteeventformdata)
Router.get('/geteventbyid/:id',EventformController.Geteventdata1)
Router.put('/updateevent/:id',EventformController.Updateeventformdata)












module.exports= Router;