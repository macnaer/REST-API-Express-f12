const User = require('../data/models/User');
const jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

exports.getUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({message: "Bad request"})
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { Email: req.body.Email}});
        if (user && bcrypt.compareSync(req.body.Password, user.Password)) {
          const { id, Name, Surname, Email } = user;
          const token = jwt.sign({ id, Name, Surname, Email }, "key");
          res.status(200).json(token);
        } else {
          res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error1"})
    }
}

exports.getUserById = async(req, res, next) => {
    try {
        const user = await User.findOne({where:{id: req.params.id}})
        if(!user){
            res.status(404).json({message: "User not found"})
        }
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

exports.createUser = async (req, res, next) => {
  const { Name, Surname, Email, Password } = req.body;
  try {
    let user = await User.findOne({ where: { Email } });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      user = new User({
        Name,
        Surname,
        Email,
        Password: bcrypt.hashSync(Password, salt),
      });
      await user.save();
      res.status(200).json({ message: "User successfully created" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

exports.updateUser = async(req,res,next) => {
    console.log("Update body ",req.body)
    const userId = req.body.id;
    const updatedUser = {
        Name: req.body.Name,
        Surname: req.body.Surname,
        Email: req.body.Email
    }

    try {
        const user = await User.update(updatedUser, {where:{id: userId}});
        if(!user){
            res.status(400).json({message: "Bad request"})
        }
        res.status(200).json({message: "User updated"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

exports.updatePassword = async(req,res,next) => {
    console.log("updatePassword => body ", req.body)
    try {
        const user = await User.findOne({where:{id: req.body.id}})
        if(!user){
            res.status(404).json({message: "User not found"})
        }
        console.log("ADs", bcrypt.compareSync(req.body.Password, user.Password));
        if (bcrypt.compareSync(req.body.Password, user.Password)) {
          res.status(400).json({ message: "Invalid password" });
        }
        if (
          !(await User.update(
            { Password: bcrypt.hashSync(req.body.newPassword, salt) },
            { where: { id: req.body.id } }
          ))
        ) {
          res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({message: "Password updated"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

exports.deleteUser = async(req,res,next) => {
    try {
        const user = await User.destroy({where:{id: req.params.id}})
        if(!user){
            res.status(404).json({message: "User not found"})
        }
        res.status(200).json({message: "User deleted"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}