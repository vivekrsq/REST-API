const express = require('express');
const cors = require('cors');
const database = require("./db/conn");
const Student = require('./models/student');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001
app.post('/students', (req, res)=>{
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(()=>{
        res.send(user);
    }).catch(e => res.send(e));
       
});
app.get('/students', async (req, res)=>{
    try {
        console.log(req.body)
        const user = await Student.find();
        res.send(user);
    } catch (error) {
        res.send(error);
    }  
});

app.get('/students/:name', async (req, res)=>{
    try {
        const name = req.params.name;
        
        const user = await Student.find({name: name});
        if(!user){
            res.status(404).send();
        }else{
            res.send(user);
        }
    } catch (error) {
        res.send(error);
    }  
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })