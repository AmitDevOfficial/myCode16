const express = require("express");
const router = express.Router();
const fetchAdmin = require("../middleware/fetchAdmin");
const getUser = require("../controller/authAdmin");
const fetchUser = require("../middleware/fetchUser")

router.get("/getUser", fetchUser, fetchAdmin, getUser);

module.exports = router;