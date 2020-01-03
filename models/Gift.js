module.exports = function(sequelize, DataTypes) {
	const Gift = sequelize.define('Gift', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		businessName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		zipcode: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		created: {
			type: DataTypes.STRING
		},
		location: {
			type: DataTypes.UUID,
			allowNull: false
		},
		voucher: {
			type: DataTypes.STRING,
			allowNull: false
		},
		value: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	});

	return Gift;
};
