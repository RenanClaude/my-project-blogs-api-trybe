const { User } = require('../models');

const getAllUsersService = async () => {
  const allInfosUsers = await User.findAll();

  const allUsers = allInfosUsers.map((userObj) => {
    const { password: _, ...allOtherData } = userObj.dataValues;
    return allOtherData;
  });
  // console.log('AQUI!', allUsers);
  return allUsers;
};
// getAllUsersService();

const getUserService = async (id) => {
  const InfosUser = await User.findByPk(id);
  // console.log('AQUI!', InfosUser);
  return InfosUser;
};
// getUserService(1000);

module.exports = {
  getAllUsersService,
  getUserService,
};