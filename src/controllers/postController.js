const jwt = require('jsonwebtoken');
const { newPostService } = require('../services/postService');

const { JWT_SECRET } = process.env;

const newPostController = async (req, res) => {
const { title, content, categoryIds } = req.body;
const { authorization: token } = req.headers;

const payload = jwt.verify(token, JWT_SECRET);
const { id } = payload.data;

const newPost = await newPostService(title, content, id, categoryIds);

return res.status(201).json(newPost);
};

module.exports = {
  newPostController,
};