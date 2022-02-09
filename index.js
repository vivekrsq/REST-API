const express = require('express');
const cors = require('cors');
const database = require("./db/conn");
const studentRouter = require('./routes/students');
const app = express();
app.use(cors());
app.use(express.json());
app.use(studentRouter);
const port = 3001


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })