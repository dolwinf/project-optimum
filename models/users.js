module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    passwordr: DataTypes.STRING
  });
  return user;
};
