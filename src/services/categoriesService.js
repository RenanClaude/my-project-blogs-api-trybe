const { Category } = require('../models');

const getAllCategoriesService = async () => {
  const allInfosCategories = await Category.findAll();
  const allCategories = allInfosCategories.map((categoryObj) => categoryObj.dataValues);
  return allCategories;
};

module.exports = {
  getAllCategoriesService,
};