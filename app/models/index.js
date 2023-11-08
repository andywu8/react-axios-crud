const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./app/db/database.sqlite"
  });


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;