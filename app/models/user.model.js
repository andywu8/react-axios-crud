module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };