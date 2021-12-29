const jwt = require('jsonwebtoken');

const customError = require(__basedir + '/error/customError');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new customError('Not authenticated', 401);
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  const secret = process.env.JWT_SECRET;

  try {
    decodedToken = jwt.verify(token, secret);
  } catch (err) {
    err.statusCode = 401;
    throw err;
  }
  if (!decodedToken) {
    consterror = new customError('Not authenticated', 401);
    throw error;
  }
  // token is valid
  console.log('token is valid', decodedToken);
  req.userId = decodedToken.userId;
  next();
};
