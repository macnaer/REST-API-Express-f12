const { Sequelize } = require("sequelize");
const db = require("../config/database");

const User  = db.define('Users', {
    Name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: trueтзь кгт вум
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync().then(() => console.log("Table user created..."))
module.exports = User;