// const { DataTypes } = require('sequelize');
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */

const categorySchema = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  })
  return categoryTable;
}

module.exports = categorySchema;