const { BlogPost, PostCategory } = require('../models');

const newPostService = async (title, content, userId, categoryIds) => {
  const newPost = await BlogPost
  .create({ title, content, userId, published: new Date(), updated: new Date() });
  const { dataValues } = newPost;
  // console.log(dataValues);
  const getNewPostCategory = categoryIds.map((categoryId) => {
    const newPostCategory = PostCategory
    .create({ postId: dataValues.id, categoryId });
    return newPostCategory;
  });
  await Promise.all(getNewPostCategory);

  return dataValues;
};
// newPostService('NEW!', 'Content here26', 1, [1, 2]);

module.exports = {
  newPostService,
};