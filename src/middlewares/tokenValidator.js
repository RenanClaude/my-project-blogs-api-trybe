const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenValidator = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
}; 

module.exports = {
  tokenValidator,
};