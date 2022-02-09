const express = require('express');
const Student = require('../models/student');
const router = new express.Router();

router.post('/students', async (req, res)=>{
    try {
        console.log(req.body)
        const user = new Student(req.body)
        const Saved = await user.save();
        res.status(201).send(Saved);
                
    }catch (e) {
        res.status(400).send(e);
    }
})
router.get('/students', async (req, res)=>{
    try {
        console.log(req.body)
        const user = await Student.find();
        res.send(user);
    } catch (error) {
        res.send(error);
    }  
});

router.get('/students/:name', async (req, res)=>{
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

router.delete('/students/:id', async(req, res)=>{
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            res.status(400).send()

        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.patch('/students/:id', async (req, res)=>{
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.send(updateStudent);
    } catch (e) {
        res.status(404).send(e);
    }
})

module.exports = router;