const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://new:new@newcluster.wie1g.mongodb.net/studentRecords?retryWrites=true&w=majority").then(()=>{
    
    console.log("connection is successful")
}).catch((e)=>{
    console.log("no connection");
})