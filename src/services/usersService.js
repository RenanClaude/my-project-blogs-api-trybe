const { User } = require('../models');

const getAllUsersService = async () => {
  const allInfosUsers = await User.findAll();

  const allUsers = allInfosUsers.map((userObj) => {
    const { password: _, ...allOtherData } = userObj.dataValues;
    return allOtherData;
  });
  return allUsers;
};

const getUserService = async (id) => {
  const InfosUser = await User.findByPk(id);
  return InfosUser;
};

const deleteUserService = async (id) => User.destroy({ where: { id } });

module.exports = {
  getAllUsersService,
  getUserService,
  deleteUserService,
};