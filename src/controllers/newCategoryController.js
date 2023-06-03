const { newCategoryService,
  //  getAllCategoryNamesService,
   } = require('../services/newCategoryService');

const newCategoryController = async (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategoy = await newCategoryService(name);
  return res.status(201).json(newCategoy);
};

module.exports = {
  newCategoryController,
};