const { newCategoryService,
  //  getAllCategoryNamesService,
   } = require('../services/newCategoryService');

const newCategoryController = async (req, res) => {
  const { name } = req.body;
  // const allCategoryNames = await getAllCategoryNamesService();
  // const existingCategory = allCategoryNames.map((categoryName) => categoryName === name);
  if (!name) {
    res.status(400).json({ message: '"name" is required' });
  }
  const newCategoy = await newCategoryService(name);
  return res.status(201).json(newCategoy);
};

module.exports = {
  newCategoryController,
};