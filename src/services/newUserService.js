const { User } = require('../models');

const getAllEmailsService = async () => {
  const data = await User.findAll();
  
  const result = data.map((userObj) => {
    const { dataValues } = userObj;
    const { email } = dataValues;
    return email;
  });
  await Promise.all(result);
  // console.log('AQUI!', result);
  return result;
};
// getAllEmailsService();

const newUserService = async (email, displayName, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
console.log(newUser);
  return newUser;
};
// const email = 'brett@email.com';
// const displayName = 'Brett Wiltshire';
// const password = '123456';
// newUserService(email, displayName, password);

module.exports = {
  getAllEmailsService,
  newUserService,
};