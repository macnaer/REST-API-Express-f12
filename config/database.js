const Sequelize = require('sequelize');
const Config = require("./settings");


module.exports = new Sequelize(Config.DATABASE_NAME, Config.DATABASE_USER, Config.DATABASE_PASS, {
    dialect: Config.DATABASE_DIALECT,
    host: Config.DATABASE_URL,
    port: Config.DATABASE_PORT
  });