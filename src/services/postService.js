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
    model: User, as: 'user', attributes: { exclude: ['password'] },
  },
  { 
    model: Category, as: 'categories', through: { attributes: [] },
  },
] });
const result = allPosts.map((post) => post.dataValues); 
/* Não precisa deste map para funcionar, sequelize já acessa sozinho o dataValues */
return result;
};
// getAllPostsService();

const getPostService = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ 
      model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    { 
      model: Category, as: 'categories', through: { attributes: [] },
    },
  ] });

    return post.dataValues;
  };

  const updatePostService = async (id, title, content) => {
    await BlogPost.update(
      { title, content, updated: new Date() },
      { where: { id } },
    );
    
    const getUpdatedPost = await BlogPost.findOne({
      where: { id },
      include: [{ 
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { 
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ] });
  
    return getUpdatedPost.dataValues;
  };

  const deletePostService = async (id) => BlogPost.destroy({ where: { id } });

module.exports = {
  newPostService,
  getAllPostsService,
  getPostService,
  updatePostService,
  deletePostService,
};