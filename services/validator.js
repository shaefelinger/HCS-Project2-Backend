const { body, validationResult } = require('express-validator');

const User = require(__basedir + '/models/userModel.js');

const userValidationRules = () => {
  return [
    // username must be an email
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject('E-Mail address exists');
          }
        });
      })
      .normalizeEmail(),
    // password must be at least 5 chars long
    body('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Password is too short'),
    // name must not be empty
    body('name').trim().not().isEmpty().withMessage('Please enter a Name'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));

  console.log(extractedErrors);
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
