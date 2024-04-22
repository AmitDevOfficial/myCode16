const express = require("express");
const router = express.Router();
const Note = require("../models/Note"); 
const fetchUser = require("../middleware/fetchUser")


//Route1: Add a note using POST ("api/notes/addnote"). Login Require--
router.post("/addnote", fetchUser, async(req, res) => {
    const body = req.body;
    const note = await Note.create({
        title: body.title,
        description: body.description,
        tag: body.tag,
        user: req.user.id
    })
    res.json(note)
    console.log( note, "Note can be Created Successfully")
})

//Route2: Fetch All Notes from (Own User Notes) using GET ("api/notes/fetchallnotes"). Login Require--
router.get("/fetchallnotes", fetchUser, async(req, res) => {
    const note = await Note.find({user: req.user.id})
    res.json(note)
    console.log( note, "Note can be Fetch Successfully")
})

//Route4: Delete Notes from (Own User Notes) using DELETE ("api/notes/deletenote/:id"). Login Require--
router.delete("/deletenote/:id", fetchUser, async(req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id)
    res.json( {msg: "Note Deleted SuccessFully", note})
    console.log( note, "Note Deleted Successfully")
})

//Route4: Delete Notes from (Own User Notes) using DELETE ("api/notes/deletenote/:id"). Login Require--
router.delete("/deletenote", fetchUser, async(req, res) => {
    const note = await Note.deleteMany({})
    res.json( {msg: "All Note Deleted SuccessFully"})
    console.log( note, "All Note Deleted Successfully")
})

module.exports = router;


