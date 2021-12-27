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

// exports.testFunction = async (req, res, next) => {
//   console.log('TEST');
//   const url =
//     'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEC58C5b2QrPogPcf4zcOYQEemp2msg9lvoS8mHG7oVhBwh5UUIb1Ok64IpyDdbh8RBdoLYdGT3i8_DVdCiL7AJfzTIR9At0HhezWwekpQIYRg2mHoH7oxmnnhsjgSohhtccpFEK8GhZaEL-smdsRmostQxmBxIN3NzfJxnnFFst1EA&3u5184&5m1&2e1&callback=none&key=AIzaSyC6iru9XKYIvVQaPG6oK1sLFBXyeSJkwWs&token=40047';
//   const path = __basedir + '/uploads/test.jpg';

//   try {
//     download(url, path, (example_image_1) => {
//       console.log('✅ Done!', example_image_1);
//     });

//     res.json(req.file);
//   } catch (err) {
//     console.log(err);
//   }
// };

exports.testError = async (req, res, next) => {
  console.log('Error');

  try {
    const error = new customError('Teapot', 418);
    throw error;
  } catch (err) {
    next(err);
  }
};
