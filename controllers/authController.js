const User = require(__basedir + '/models/userModel.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const customError = require(__basedir + '/error/customError');

const { validationResult } = require('express-validator');

/// just for testing - remove
exports.getIndex = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  console.log('signup');
  console.log(req.errors);

  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   const error = new customError(
    //     'Validation failed! ' + errors.array()[0].msg,
    //     422
    //   );
    //   error.data = errors.array();
    //   throw error;
    // }

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
    const result = await user.save();
    res
      .status(201)
      .json({
        message: 'User created',
        userID: result._id,
        email: result.email,
      });
  } catch (err) {
    // if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      const error = new customError('Login Data is wrong', 401);
      throw error;
    }
    loadedUser = user;
    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      const error = new customError('Login Data is wrong', 401);
      throw error;
    }
    // user is auth -> generate token

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
      },
      secret,
      { expiresIn: '1h' }
    );
    console.log('is auth', token);
    res.status(200).json({ token: token, userId: loadedUser._id.toString() });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};
