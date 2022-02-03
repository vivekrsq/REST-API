const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newStudents?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false").then(()=>{
    
    console.log("connection is successful")
}).catch((e)=>{
    console.log("no connection");
})