const customError = require(__basedir + '/error/customError');

const fs = require('fs');
const request = require('request');
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

// using request
const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on('close', callback);
  });
};

exports.testFunction = async (req, res, next) => {
  try {
    const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true';
    const filename = 'test3.jpg';
    const result = await downloadImage(url, filename);
    console.log('downloaded', result);
    res.json();
  } catch (err) {
    console.log(err);
  }
};

exports.testError = async (req, res, next) => {
  console.log('Error');

  try {
    const error = new customError('Teapot', 418);
    throw error;
  } catch (err) {
    next(err);
  }
};
