module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    mobile: DataTypes.INTEGER,
    homeAddress: DataTypes.STRING,
    password: DataTypes.STRING
  });

  user.associate = function(models) {
    // Associating user with Posts
    // When an user is deleted, also delete any associated Posts
    user.hasMany(models.item, {
      onDelete: "cascade"
    });
  };

  return user;
};
