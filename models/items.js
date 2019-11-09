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
