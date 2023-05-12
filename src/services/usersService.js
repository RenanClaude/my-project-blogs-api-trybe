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

module.exports = {
  getAllUsersService,
};