// const customError = require(__basedir + '/error/customError');
const path = require('path');

const fs = require('fs');
const axios = require('axios');

exports.profilePicUpload = async (req, res, next) => {
  console.log('profilePicUpload:', req.file);
  res.json(req.file);
  // not doing anything. the upload is handeld by the profilePicUpload-middleware
};

//
async function downloadImage(url, filename) {
  console.log('downloadImage');
  const filePath = path.join(__basedir, 'uploads', filename);
  // const path = '/uploads/' + filename;
  // const path = '/uploads/' + filename;
  const writer = fs.createWriteStream(filePath);

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

exports.blogpostPicsUpload = async (req, res, next) => {
  console.log('blogpostPicsUpload:', req.body);
  const url = req.body.url;
  const filename = req.body.filename;
  const result = await downloadImage(url, filename);
  console.log('img-result', result);

  res.json({ filename: filename });
};
