const jwt = require('jsonwebtoken');
const { 
  getAllUsersService, getUserService, deleteUserService,
} = require('../services/usersService');

const { JWT_SECRET } = process.env;

const getAllUsersController = async (_req, res) => {
  const dataAllUsers = await getAllUsersService();
  return res.status(200).json(dataAllUsers);
};

const getUserController = async (req, res) => {
  const { id } = req.params;
  const dataUser = await getUserService(id);
  if (!dataUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  const { password: _, ...allOtherData } = dataUser.dataValues;
  return res.status(200).json(allOtherData);
};

const deleteUserController = async (req, res) => {
  const { authorization: token } = req.headers;
  const payload = jwt.verify(token, JWT_SECRET);
  const { id } = payload.data;

  await deleteUserService(id);
  return res.status(204).json();
};

module.exports = {
  getAllUsersController,
  getUserController,
  deleteUserController,
};