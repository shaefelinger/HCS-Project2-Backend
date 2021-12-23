const customError = require(__basedir + '/error/customError');

exports.testFunction = (req, res, next) => {
  console.log(req.file);
  res.json(req.file);
};

exports.testError = async (req, res, next) => {
  console.log('Error');

  try {
    const error = new customError('Teapot', 418);
    throw error;
  } catch (err) {
    next(err);
  }
};
