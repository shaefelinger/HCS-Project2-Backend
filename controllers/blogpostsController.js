const Blogpost = require(__basedir + '/models/blogpostModel');

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
  console.log('POST new blogpost');
  try {
    const newBlogpost = new Blogpost(req.body);
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

exports.updateOneBlogpost = async (req, res, next) => {
  const _id = req.params.blogpostID;
  const $set = req.body;
  console.log('Update one blogpost', _id);
  try {
    const result = await Blogpost.updateOne({ _id }, { $set });
    res
      .status(200)
      .json({ message: `Updated ${result.nModified} blogpost(s)` });
  } catch (err) {
    next(err);
  }
};
