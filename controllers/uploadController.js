// const customError = require(__basedir + '/error/customError');

const fs = require('fs');
const axios = require('axios');

// using axios
async function downloadImage(url, filename) {
  const path = __basedir + '/uploads/' + filename;
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

exports.blogpostPicsUpload = async (req, res, next) => {
  console.log('blogpostPicsUpload:', req.body);
  const url = req.body.url;
  const filename = req.body.filename;
  const result = await downloadImage(url, filename);
  console.log(result);

  res.json({ filename: filename });
};
