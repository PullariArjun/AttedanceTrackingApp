const express = require("express");
const postStudent = require('./src/APIs/postStudent');
const getStudentDetails = require('./src/APIs/getStudentDeatils')
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./src/config/db");
const cors = require("cors");
const isstudentin = require('./src/APIs/isstudentin')
const updateStudent = require('./src/APIs/updateStudent')
const UserRouter = require('./src/routes/userRoutes');
const { default: mongoose } = require("mongoose");
const Students = require('./src/models/Students');
const getstudentbyroll = require("./src/APIs/getstudentbyroll");
const deletestudent=require("./src/APIs/deletestudent")
// Initiate Mongo Server
// InitiateMongoServer();
const postemployee = require("./src/APIs/postemployee");

mongoose.connect("mongodb+srv://Arjun:Arjunram123@arjun.egglnwa.mongodb.net/Project-Space?retryWrites=true&w=majority")
.then(console.log("Database Connected"))

const app = express();

// PORT
const PORT =  4000;


// Middleware
app.use(bodyParser.json());
//cors
app.use(cors());
app.use('/', UserRouter);



//post a Student
app.post('/poststudent',postStudent);

//get all students
app.get('/getstudentdetails', getStudentDetails);

//update a student
app.put('/updateStudent/:id', updateStudent);

//check is student is in database
app.get('/isstudentin/:rollNo', isstudentin);

//post new Employee
app.post("/postemployee", postemployee)

app.get('/getstudentbyroll/:rollNo',getstudentbyroll)


//delete student
app.delete('/deletestudent/:id',deletestudent)

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

