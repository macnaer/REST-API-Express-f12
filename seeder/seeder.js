const User = require('../data/models/User');
const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);

const seed = async () => {
    let admin = await User.findOne({ where: { email: "admin@gmail.com" } })

    if (!admin) {
        await new User({
            Name: "Admin",
            Surname: "Admin",
            Email: "admin@gmail.com",
            Role: "admin",
            Password: bcrypt.hashSync("Qwerty-1", salt),
        }).save()
    }
}

seed();
