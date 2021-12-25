// const customError = require(__basedir + '/error/customError');

exports.profilePicUpload = async (req, res, next) => {
  console.log('profilePicUpload:', req.file);
  res.json(req.file);
};

exports.blogpostPicsUpload = async (req, res, next) => {
  console.log('blogpostPicsUpload:', req.files);
  res.json(req.files);
};
