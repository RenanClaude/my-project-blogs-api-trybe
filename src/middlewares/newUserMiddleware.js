const newUserValidator = (req, res, next) => {
  const { displayName, email, password } = req.body;
  
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  // return res.status(200).json({ message: '"FOI' });
  next();
};

module.exports = {
  newUserValidator,
};