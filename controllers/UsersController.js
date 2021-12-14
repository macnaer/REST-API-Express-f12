const User = require('../data/models/User');
const db = require('../data/config/database');


exports.getUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({message: "Bad request"})
    }
}
