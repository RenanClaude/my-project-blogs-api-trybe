const { getAllCategoriesService } = require('../services/categoriesService');

const newPostFieldValidator = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const allCategories = await getAllCategoriesService();

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const result = categoryIds.map((categoryId) => {
    const matchId = allCategories.find((ObjCategory) => categoryId === ObjCategory.id);
    return matchId;
  });
  // console.log('RESULT AQUI:', result);
  const verificationResult = result.some((obj) => obj === undefined);
  // console.log('verificationResult:', verificationResult);
  if (verificationResult) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  newPostFieldValidator,
};