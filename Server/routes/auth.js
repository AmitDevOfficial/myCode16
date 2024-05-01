const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/fetchUser")

//This is secret jwt secret token--
const JWT_SECRET = "Code16ankit$amit"

//Route-1: Create a user using POST "api/auth/createuser" -- No Login Required--
router.post("/createuser",
    // using validation to verify valid inputs (MIDDLEWARE)
    [
        body("name", "Name Must be 3 or more Characters").isLength({ min: 3 }),
        body("email", "Enter a Vaild Email Id").isEmail(),
        body("password", "Password Must be 5-Character").isLength({ min: 5 }),
    ], async (req, res) => {
        let success = false;
        //if there are the error, return bad request and the errors--
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ Error: error.array() });
        }

        //User has been already exits in same email then we show this error--
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                success = false;
                return res.status(400).json({ success, Error: 'Error : Sorry User already Exit in this same email' });
            }

            //Adding bcrypt to add salt and hash to secure user password--
            const salt = await bcrypt.genSalt(10);
            const secPassword = await bcrypt.hash(req.body.password, salt);
            //Create a New User--
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword
            })
            // return res.status(201).json({ msg: "User created Successfully" });

            //Using JWT Token -- User createed our account so we can give the auth token--
            const data = {
                user: {
                    id: user.id,
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.status(201).json({ success, authToken });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({ Error: "Internal Server Error" });
        }
    })


//Route-2: Login  a user using POST "api/auth/login" -- No Login Required--
router.post("/login", [
    body("email", "Enter a vaild Email Id").isEmail(),
    body("password", "Enter a vaild Password").exists(),
], async (req, res) => {
    let success = false;

    //if there are errors, return bad request and the errors--
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ success, error: "Please try again with the correct credientials" });
        }

        //Check password with bycrpt -- if password is not match then they show the error--
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try again with the correct credientials" });
        }
        // return res.status(200).json({ success: "you have been successfully Login" });

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        success = true;
        res.status(200).json({ success, authToken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Internal Server Error" });
    }
})


//Route-3: Get  the user using GET "api/auth/getuser" --  Login Required--
router.post("/getuser", fetchUser, async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.status(200).send(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Internal Server Error" });
    }
})


//Route-4: Update  the user using PUT "api/auth/updateuser/:id" --  Login Required--
router.put("/updateuser/:id", fetchUser, async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = {};

        if (name) { newUser.name = name };
        if (email) { newUser.email = email };

        //Find the user to update her own profile--
        let user = await User.findById(req.params.id);
        if (!user) { return res.status(404).send("Not Found") };

        //check the user are the real user--
        user = await User.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true });
        res.json({ user })
        console.log("User Updated SuccessFully")
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Internal Server Error" });
    }
})


//Route-5: Delete the user using DELETE "api/auth/deleteuser/:id" --  Login Required--
router.delete("/deleteuser/:id", fetchUser, async (req, res) => {

    try {
        //Find the user can be deleted own account -- 
        let user = await User.findById(req.params.id);
        if (!user) { return res.status(404).send("Not Found") };

        user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json({ "Success": "Account can be deleted Successfully" });
        console.log("Account Deleted Successfully")
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Internal Server Error" });
    }
})



module.exports = router


