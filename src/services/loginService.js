const { User } = require('../models');

const loginService = async (email, password) => {
  const dataLogin = await User.findOne({ where: { email, password } });
  // console.log('AQUI!', dataLogin);
  return dataLogin;
};
// const e = 'lewishamilton@gmail.com';
// const p = '123456';
// loginService(e, p);

module.exports = {
  loginService,
};