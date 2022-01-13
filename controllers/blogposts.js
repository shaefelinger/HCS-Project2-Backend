const Blogpost = require(__basedir + '/models/Blogpost');
const UPLOAD_PATH = 'uploads';

// const BACKEND_URL = 'http://localhost:3000/'; // just for dev
const BACKEND_URL = 'https://aroundtheworld-backend2.apps.functionfactory.de';

const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const extractFileNameFromPath = function (str) {
  return str.split('\\').pop().split('/').pop();
};

async function downloadAndSave(url, filename) {
  const filePath = path.join(UPLOAD_PATH, filename);
  // const filePath = path.join(__basedir, UPLOAD_PATH, filename);
  const writer = fs.createWriteStream(filePath);

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

exports.getAll = async (req, res, next) => {
  console.log('GET all blogposts');
  try {
    const result = await Blogpost.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.postNew = async (req, res, next) => {
  console.log('POST new blogpost', req.body);

  try {
    const newBlogpost = new Blogpost(req.body);

    // start img upload
    const uuid = uuidv4();
    const image1new = await downloadAndSave(
      req.body.image1URL,
      req.body.name + '1-' + uuid + '.jpg'
    );
    const image2new = await downloadAndSave(
      req.body.image2URL,
      req.body.name + '2-' + uuid + '.jpg'
    );

    console.log(image1new, image2new);

    console.log(process.env.path);

    newBlogpost.image1URL = path.join(BACKEND_URL, UPLOAD_PATH, image1new);
    newBlogpost.image1URL = path.join(BACKEND_URL, UPLOAD_PATH, image2new);
    // end img upload

    const result = await newBlogpost.save();
    res
      .status(200)
      .json({ message: 'Succesfully added a new blogpost: ' + result.name });
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const _id = req.params.blogpostID;
  console.log('GET one blogpost', _id);
  try {
    const result = await Blogpost.findOne({ _id });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  const _id = req.params.blogpostID;

  console.log('DELETE one blogpost', _id);
  try {
    const blogpostToDelete = await Blogpost.findOne({ _id });
    console.log('blogpostToDelete', blogpostToDelete);
    const img1 = extractFileNameFromPath(blogpostToDelete.image1URL);
    const img2 = extractFileNameFromPath(blogpostToDelete.image2URL);

    fs.unlink(path.join(UPLOAD_PATH, img1), (err) => {
      if (err) throw err;
      console.log('successfully deleted file1');
    });
    fs.unlink(path.join(UPLOAD_PATH, img1), (err) => {
      if (err) throw err;
      console.log('successfully deleted file2');
    });

    const result = await Blogpost.deleteOne({ _id });

    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} blogpost(s)` });
  } catch (err) {
    next(err);
  }
};

exports.replaceOne = async (req, res, next) => {
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
