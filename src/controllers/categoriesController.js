const { getAllCategoriesService } = require('../services/categoriesService');

const getAllCategoriesController = async (_req, res) => {
  const allCategories = await getAllCategoriesService();
  return res.status(200).json(allCategories);
};

module.exports = {
  getAllCategoriesController,
};