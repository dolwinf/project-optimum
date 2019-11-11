module.exports = function (sequelize, DataTypes) {
	var Item = sequelize.define("Item", {
		Category: DataTypes.INTEGER,
		Name: DataTypes.STRING,
		Description: DataTypes.STRING,
		Status: DataTypes.STRING,
		ImageURL: DataTypes.STRING,
		UserID: DataTypes.INTEGER
	});
	return Item;
};
