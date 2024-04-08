const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');



//Route-1: Create a user using POST "api/auth/createuser" -- No Login Required--
router.post("/createuser", 
// using validation to verify valid inputs (MIDDLEWARE)
[
    body("name", "Name Must be 3 or more Characters").isLength({min: 3}),
    body("email", "Enter a Vaild Email Id").isEmail(),
    body("password", "Password Must be 5-Character").isLength({min: 5}),
], async (req, res) => {

    //if there are the error, return bad request and the errors--
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).send('Error : Sorry User already Exit in this same email');
        }

        //Adding bcrypt to add salt and hash to secure user password--
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password,salt);
        //Create a New User--
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword
        })
        return res.status(201).json({ msg: "User created Successfully" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//Route-2: Login  a user using POST "api/auth/login" -- No Login Required--
router.post("/login", [
    body("email", "Enter a vaild Email Id").isEmail(),
    body("password", "Enter a vaild Password").exists(),
], async (req, res) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try again with the correct credientials" });
        }

        //Check password with bycrpt -- if password is not match then they show the error--
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try again with the correct credientials" });
        }
        return res.status(200).json({ success: "you have been successfully Login" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//Route-3: Get  the user using GET "api/auth/getuser" --  Login Required--
router.post("/getuser", async (req, res) => {

    try {
        const user = await User.find({});
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getuser", async (req, res) => {

    try {
        const user = await User.find({});
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/finduser/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router


