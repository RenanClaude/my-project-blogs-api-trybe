const jwt = require('jsonwebtoken');
const { getAllEmailsService, newUserService } = require('../services/newUserService');

const { JWT_SECRET } = process.env;

const newUserController = async (req, res) => {
  const { email, displayName, image, password } = req.body;
  const allEmails = await getAllEmailsService(email);
  const existingEmail = allEmails.find((userEmail) => userEmail === email);
  
  if (existingEmail !== undefined) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await newUserService(email, displayName, password, image);

  const { password: _, ...dataUser } = newUser.dataValues;
  const token = jwt.sign({ dataUser }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '60m' });
  
  return res.status(201).json({ token });
};

module.exports = {
  newUserController,
};