const customError = require(__basedir + '/error/customError');

exports.uploadProfilePic = async (req, res, next) => {
  console.log(req.file);
  res.json(req.file);
};
