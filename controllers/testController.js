const customError = require(__basedir + '/error/customError');



// exports.testFunction = async (req, res, next) => {
//   try {
//     const result = await test.testFunction(req);
//     res.status(200).json(result);
//   } catch (err) {
//     next(err);
//   }
// };

exports.testError = async (req, res, next) => {
  console.log('Error');

  try {
    const error = new customError('Teapot', 418);
    throw error;
  } catch (err) {
    next(err);
  }
};
