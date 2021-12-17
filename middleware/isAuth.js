const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'mysupersecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    consterror = new Error('not authenticated');
    error.statusCode = 401;
    throw error;
  }
  // token is valid
  console.log('token is valid', decodedToken);
  req.userId = decodedToken.userId;
  next();
};
