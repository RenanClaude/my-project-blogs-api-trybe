const jwt = require('jsonwebtoken');
const { newPostService, getAllPostsService } = require('../services/postService');
const { getAllCategoriesService } = require('../services/categoriesService');

const { JWT_SECRET } = process.env;

const newPostController = async (req, res) => {
const { title, content, categoryIds } = req.body;
const { authorization: token } = req.headers;

const payload = jwt.verify(token, JWT_SECRET);
const { id } = payload.data;

const allCategories = await getAllCategoriesService();
const result = categoryIds
.map((categoryId) => allCategories.find((ObjCategory) => categoryId === ObjCategory.id));

const verificationResult = result.some((obj) => obj === undefined);
if (verificationResult) {
  return res.status(400).json({ message: 'one or more "categoryIds" not found' });
}

const newPost = await newPostService(title, content, id, categoryIds);
return res.status(201).json(newPost);
};

const allPostsController = async (_req, res) => {
  const allPosts = await getAllPostsService();
  return res.status(200).json(allPosts);
};

module.exports = {
  newPostController,
  allPostsController,
};