const User = require('../data/models/User');

exports.getUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({message: "Bad request"})
    }
}

exports.createUser = async(req, res, next) => {
    const { Name, Surname, Email, Password } = req.body;
    try{
        let user = await User.findOne({where:{Email}});
        if(user){
            res.status(400).json({message: "User already exists"});
        }else{
            user = new User({
                Name, Surname,Email, Password
            });
            console.log("User => ", user);
            await user.save();
            res.status(200).json({message: "User successfully created"})
        }
    }
    catch (error) {
        res.status(400).json({message: "Bad request"})
    }
}
