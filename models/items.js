module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    CategoryID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Status: DataTypes.STRING,
    EstimateValue: DataTypes.DECIMAL,
    UserID: DataTypes.INTEGER
  });
  return Item;
};

//seed
//insert into items (id, CategoryID, Name, Description, Status, UserID, createdAt, updatedAt) values(3, 3, "Motorbike", "Exchanging my Motorbike for your Car", "Swap", 1, "9999-12-31 23:59:59", "9999-12-31 23:59:59")
