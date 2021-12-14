const express = require("express");
const router = express.Router();

// Import user controller
const { getUsers, createUser } = require("../controllers/UsersController")


router.get("/", getUsers);

router.post("/", createUser);

module.exports = router;