const express =require('express');
const Router = express.Router();
const EventController =require("../controllers/EventController")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
const upload = multer({ storage: storage })

Router.post('/addevent',upload.single("myfile"),EventController.Addeventdata)
Router.get('/getallevents',EventController.Geteventdata)
module.exports= Router;