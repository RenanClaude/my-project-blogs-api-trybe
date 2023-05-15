const loginValidator = (req, res, next) => {
  console.log('Chegou');
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  loginValidator,
};