module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("item", {
    Category: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Status: DataTypes.STRING,
    ImageURL: DataTypes.STRING,
    UserID: DataTypes.INTEGER
  });
  return item;
};

//seed
//insert into items (Category, Name, Description, Status, ImageURL, UserID, createdAt, updatedAt) values(1, "Motorbike", "Exchanging my Motorbike for your Car", "Available", "http://crossfiremotorcycles.com/wp/wp-content/uploads/2017/11/crossfire-cf50-motorbike-dirt-children-kids-red-1.jpg", 1, "9999-12-31 23:59:59", "9999-12-31 23:59:59")
