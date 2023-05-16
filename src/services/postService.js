const { BlogPost, PostCategory, User, Category } = require('../models');

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

const getAllPostsService = async () => {
const allPosts = await BlogPost.findAll({ 
  include: [{ 
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password'],
    },
  },
  { 
    model: Category,
    as: 'categories',
    attributes: {
      exclude: ['PostCategory'],
    },
  },
] });
// const y = allPosts.map((post) => post.dataValues.user.dataValues);
// const x = allPosts.map((post) => post.dataValues);
// console.log('RESULT HERE:', x);
return allPosts;
};
getAllPostsService();

module.exports = {
  newPostService,
  getAllPostsService,
};