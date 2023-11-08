const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./app/db/database.sqlite"
});

// const db = require("./app/models");

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}