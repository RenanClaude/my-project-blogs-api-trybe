// const { DataTypes } = require('sequelize');
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */

const usersSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.DATE,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  })

  userTable.associate = (models) => {
    userTable.hasMany(models.BlogPost), {
      foreignKey: 'userId',
      as: 'blog_posts'
    }
  }

  return userTable;
}

module.exports = usersSchema;