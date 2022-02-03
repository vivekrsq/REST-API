const express = require('express');
const cors = require('cors');
const database = require("./db/conn");
const Student = require('./models/student');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001
app.post('/create', (req, res)=>{
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(()=>{
        res.send(user);
    }).catch(e => res.send(e));
    
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })