module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    mobile: DataTypes.INTEGER,
    homeAddress: DataTypes.STRING,
    postalAddress: DataTypes.STRING,
    suburb: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};
