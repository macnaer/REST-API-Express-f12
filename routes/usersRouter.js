const express = require("express");
const router = express.Router();

// Import user controller
const { getUsers } = require("../controllers/UsersController")


router.get("/", getUsers);

module.exports = router;