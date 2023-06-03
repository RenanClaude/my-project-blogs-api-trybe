/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */

const postsCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  postCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: postCategoryTable,
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'blog_posts',
      through: postCategoryTable,
      otherKey: 'postId',
    });
  }
  return postCategoryTable;
}

module.exports = postsCategorySchema;