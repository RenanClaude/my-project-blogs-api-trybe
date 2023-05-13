const { Category } = require('../models');

const getAllCategoryNamesService = async () => {
  const data = await Category.findAll();
  
  const result = data.map((categoryObj) => {
    const { dataValues } = categoryObj;
    const { name } = dataValues;
    return name;
  });
  // console.log('AQUI!', result);
  return result;
};
// getAllCategoryNamesService();

const newCategoryService = async (name) => {
  const newCategory = await Category.create({ name });
  const { dataValues } = newCategory;
// console.log('AQUI!:', dataValues);
  return dataValues;
};
// const n = 'BatataScript';
// newCategoryService(n);

module.exports = {
  newCategoryService,
  getAllCategoryNamesService,
};