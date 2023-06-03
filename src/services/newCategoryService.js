const { Category } = require('../models');

const newCategoryService = async (name) => {
  const newCategory = await Category.create({ name });
  const { dataValues } = newCategory;
  return dataValues;
};

module.exports = {
  newCategoryService,
};