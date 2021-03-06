const notes = require('../model/note.model')
const express = require('express')
const router = express.Router()

router.get('/test',(req,res)=>{
    res.json({status:"application wotking"})
})
router.post('/add',(req,res)=>{
   
    var data1=req.body
    const newinst = new notes(data1)
    newinst.save()
    .then(()=>{console.log('new record added successfully')})
    .catch(()=>{console.log('unable to add new record' )})
});

// Retrieve all Notes
router.get('/',(req,res)=>{
    notes.find()
    .then((data)=>{console.log('retrieved records successfully'+ res.json(data))})
    .catch(()=>{console.log('unable to retrieve records' )})
});

// Retrieve a single Note with noteId
router.get('/:noteId',(req,res)=>{
    //notes.findOne({_id:req.params.noteId})
    notes.findById(req.params.noteId)
    .then((da)=>{console.log('retrieved record successfully' +res.send(da))})
    .catch(()=>{console.log('unable to retrieve record' )})
});

// Update a Note with noteId
router.put('/update/:noteId',(req,res)=>{
    notes.findByIdAndUpdate(req.params.noteId,{ name : "updated",author: "updated" })
    .then((data)=>{console.log('updated one record successfully'+data)})
    .catch(()=>{console.log('unable to update record')})
});

// Delete a Note with noteId
router.delete('/delete/:noteId',(req,res)=>{
    notes.findByIdAndDelete(req.params.noteId)
    .then((data)=>{console.log('deleted one record successfully'+data)})
    .catch((data)=>{console.log('couldnot delete record')})
});



module.exports = router
                        