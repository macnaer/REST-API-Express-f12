const express = require("express");
const router = express.Router();

// Import user controller
const { getUsers, createUser, getUserById, deleteUser, updateUser, updatePassword } = require("../controllers/UsersController")


router.get("/", getUsers);
router.get("/:id", getUserById)
router.post("/", createUser);
router.delete('/:id', deleteUser)
router.put('/', updateUser)
router.put('/:id/updatePassword/', updatePassword)

module.exports = router;