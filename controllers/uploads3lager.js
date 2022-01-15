// const customError = require(__basedir + '/error/customError');

const fs = require('fs');
const axios = require('axios');

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'functionfactory/test',
    acl: 'public-read',
    key: function (request, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
}).array('uploads', 1);

// using axios -> experimental
async function downloadImage(url, filename) {
  const path = __basedir + '/public/blogpostPics/' + filename;
  const writer = fs.createWriteStream(path);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

exports.profilePicUpload = async (req, res, next) => {
  console.log('profilePicUpload:', req.file);
  res.json(req.file);
};

// only experimental ->

exports.blogpostPicsUpload = async (req, res, next) => {
  console.log('blogpostPicsUpload:', req.body);
  const url = req.body.url;
  const filename = req.body.filename;
  //   const result = await downloadImage(url, filename);
  await upload(req.body.url);

  res.json({ filename: filename });
};
