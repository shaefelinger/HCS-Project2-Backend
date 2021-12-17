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

  //   (err) => {
  //   if (!err) {
  //     res.send('Succesfully added a new blogpost: ' + newBlogpost.name);
  //   } else {
  //     res.send(err);
  //   }
  // });

  try {
    const newBlogpost = new Blogpost(req.body);
    const result = await newBlogpost.save();
    // res.status(200).json(result);
    res
      .status(200)
      .json({ message: 'Succesfully added a new blogpost: ' + result.name });
  } catch (err) {
    next(err);
  }
};
