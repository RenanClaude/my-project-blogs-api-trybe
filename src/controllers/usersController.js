const { getAllUsersService, getUserService } = require('../services/usersService');

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

module.exports = {
  getAllUsersController,
  getUserController,
};