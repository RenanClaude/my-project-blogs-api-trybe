const { User } = require('../models');

const loginService = async (email, password) => {
  const dataLogin = await User.findOne({ where: { email, password } });
  return dataLogin;
};

module.exports = {
  loginService,
};