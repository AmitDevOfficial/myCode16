const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { createUser, login, getUser, updateUser, deleteUser } = require('../controller/authUser');
const fetchUser = require("../middleware/fetchUser")
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

// Route for creating a user
router.post('/createuser', [
    // Validation middleware
    body("name", "Name must be 3 or more characters").isLength({ min: 3 }),
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 })
], upload.single('image'),  createUser)
    .post('/login', [
        body("email", "Enter a vaild Email Id").isEmail(),
        body("password", "Enter a vaild Password").exists(),
    ], login)
    .post("/getuser",fetchUser,getUser)
    .patch("/updateuser/:id",fetchUser,updateUser)
    .delete("/deleteuser/:id",fetchUser,deleteUser)

module.exports = router;
