const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const UPLOAD_PATH = 'uploads/profilePics';

const fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, UPLOAD_PATH);
  },
  filename: (req, file, callback) => {
    callback(null, uuidv4() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log(file.mimetype);
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    console.log('file accepted');
    cb(null, true);
  } else {
    console.log('file rejected');
    cb(null, false);
  }
};

module.exports = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
}).single('image');
