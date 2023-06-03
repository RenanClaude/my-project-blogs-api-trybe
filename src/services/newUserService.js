const { User } = require('../models/index');

const getAllEmailsService = async () => {
  const data = await User.findAll();
  
  const result = data.map((userObj) => {
    const { dataValues } = userObj;
    const { email } = dataValues;
    return email;
  });
  return result;
};

const newUserService = async (email, displayName, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
console.log(newUser);
  return newUser;
};

module.exports = {
  getAllEmailsService,
  newUserService,
};