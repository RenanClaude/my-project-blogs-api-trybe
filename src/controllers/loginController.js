const jwt = require('jsonwebtoken');
const { loginService } = require('../services/loginService');

const { JWT_SECRET } = process.env;

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultService = await loginService(email, password);

  if (!resultService) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { password: _, ...dataUser } = resultService.dataValues;
  const token = jwt.sign({ data: dataUser }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '60m' });

  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};