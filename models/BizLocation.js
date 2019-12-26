module.exports = function(sequelize, DataTypes) {
	const BizLocation = sequelize.define('BizLocation', {
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
		zipcode: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false
		},
		avatar: {
			type: DataTypes.STRING,
			allowNull: false
		},
		admin: {
			type: DataTypes.UUID,
			allowNull: false
		}
	});

	return BizLocation;
};
