const User = require(__basedir + '/models/userModel.js');

exports.getIndex = (req, res, next) => {
  res.send('Auth index');
};

///////////////////// List of ALL users - just for testing
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};
