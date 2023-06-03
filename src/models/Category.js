/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */

const categorySchema = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
  },
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  })
  return categoryTable;
}

module.exports = categorySchema;