module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("tutorial", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };