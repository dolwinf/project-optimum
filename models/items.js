module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("item", {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    ImageURL: DataTypes.STRING
  });

  item.associate = function(models) {
    item.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return item;
};

//seed
//insert into items (Category, Name, Description, Status, ImageURL, UserID, createdAt, updatedAt) values(1, "Motorbike", "Exchanging my Motorbike for your Car", "Available", "http://crossfiremotorcycles.com/wp/wp-content/uploads/2017/11/crossfire-cf50-motorbike-dirt-children-kids-red-1.jpg", 1, "9999-12-31 23:59:59", "9999-12-31 23:59:59")
