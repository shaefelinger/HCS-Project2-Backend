const Blogpost = require(__basedir + '/models/blogpostModel');

const fs = require('fs');
const axios = require('axios');

const { v4: uuidv4 } = require('uuid');

// using axios
async function downloadImage(url, filename) {
  const path = __basedir + '/public/blogpostPics/' + filename;
  const writer = fs.createWriteStream(path);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  // return new Promise((resolve, reject) => {
  //   writer.on('finish', resolve);
  //   writer.on('error', reject);
  // });

  return filename;
}

exports.getAllBlogposts = async (req, res, next) => {
  console.log('GET all blogposts');
  try {
    const result = await Blogpost.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.postNewBlogpost = async (req, res, next) => {
  console.log('POST new blogpost', req.body);

  // axios
  //   .get(
  //     'http://www.sclance.com/pngs/png-file-download/png_file_download_1057991.png',
  //     { responseType: 'stream' }
  //   )
  //   .then((response) => {
  //     // Saving file to working directory
  //     response.data.pipe(fs.createWriteStream('todays_picture.png'));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  try {
    const uuid = uuidv4();
    const image1new = await downloadImage(
      req.body.image1URL,
      req.body.name + '1-' + uuid + '.jpg'
    );
    const image2new = await downloadImage(
      req.body.image2URL,
      req.body.name + '2-' + uuid + '.jpg'
    );

    console.log(image1new, image2new);

    console.log(process.env.path);

    const newBlogpost = new Blogpost(req.body);
    newBlogpost.image1URL = __basedir + '/blogpostPics/' + image1new;
    newBlogpost.image2URL = __basedir + '/blogpostPics/' + image2new;
    // newBlogpost.image1URL =
    //   'http://localhost:3000/' + '/blogpostPics/' + image1new;
    // newBlogpost.image2URL =
    //   'http://localhost:3000/' + '/blogpostPics/' + image2new;
    const result = await newBlogpost.save();
    res
      .status(200)
      .json({ message: 'Succesfully added a new blogpost: ' + result.name });
  } catch (err) {
    next(err);
  }
};

exports.getOneBlogpost = async (req, res, next) => {
  const _id = req.params.blogpostID;
  console.log('GET one blogpost', _id);
  try {
    const result = await Blogpost.findOne({ _id });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteOneBlogpost = async (req, res, next) => {
  const _id = req.params.blogpostID;
  console.log('DELETE one blogpost', _id);
  try {
    const result = await Blogpost.deleteOne({ _id });
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} blogpost(s)` });
  } catch (err) {
    next(err);
  }
};

exports.replaceOneBlogpost = async (req, res, next) => {
  const _id = req.params.blogpostID;
  // const $set = req.body;
  console.log('PUT - Replace one blogpost', _id);
  try {
    const result = await Blogpost.replaceOne({ _id }, req.body);
    res
      .status(200)
      .json({ message: `Replaced ${result.nModified} blogpost(s)` });
  } catch (err) {
    next(err);
  }
};

// exports.updateOneBlogpost = async (req, res, next) => {
//   const _id = req.params.blogpostID;
//   const $set = req.body;
//   console.log('PATCH - Update one blogpost', _id);
//   try {
//     const result = await Blogpost.updateOne({ _id }, { $set });
//     res
//       .status(200)
//       .json({ message: `Updated ${result.nModified} blogpost(s)` });
//   } catch (err) {
//     next(err);
//   }
// };
