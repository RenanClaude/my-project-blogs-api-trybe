// const { DataTypes } = require('sequelize');
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */

const blogPostSchema = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      // allowNull: false,
    }
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  })

  blogPostTable.associate = (models) => {
    blogPostTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }

  return blogPostTable;
}

module.exports = blogPostSchema;