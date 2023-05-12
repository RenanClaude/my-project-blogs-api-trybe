const { getAllUsersService } = require('../services/usersService');

const getAllUsersController = async (_req, res) => {
  const dataAllUsers = await getAllUsersService();
  return res.status(200).json(dataAllUsers);
};

module.exports = {
  getAllUsersController,
};