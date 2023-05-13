const { Category } = require('../models');

const getAllCategoriesService = async () => {
  const allInfosCategories = await Category.findAll();
  const allCategories = allInfosCategories.map((categoryObj) => categoryObj.dataValues);
  // console.log('AQUI!', allCategories);
  return allCategories;
};
// getAllCategoriesService();

module.exports = {
  getAllCategoriesService,
};