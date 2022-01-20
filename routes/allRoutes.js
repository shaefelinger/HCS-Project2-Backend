const express = require('express');
const router = express.Router();

const isAuth = require(__basedir + '/middleware/isAuth');

const { userValidationRules, validate } = require(__basedir +
  '/services/validator.js');

const help = require(__basedir + '/controllers/help');
const test = require(__basedir + '/controllers/test');
const auth = require(__basedir + '/controllers/auth.js');
const blogposts = require(__basedir + '/controllers/blogposts.js');
const upload = require(__basedir + '/controllers/upload.js');

// / root
router.get('/', function (req, res) {
  res.status(200).send('A request was made to the root: ' + __basedir);
});

// / help
router.get('/help', help.getHelp);

// auth
router.get('/auth', auth.getIndex); // just to experimant - delete

router.post('/auth/signup', userValidationRules(), validate, auth.signup);

router.post('/auth/login', auth.login);

// blogposts
router.get('/blogposts', blogposts.getAll);
router.post('/blogposts', isAuth, blogposts.postNew);
router.get('/blogposts/:blogpostID', blogposts.getOne);
router.delete('/blogposts/:blogpostID', isAuth, blogposts.deleteOne);
router.put('/blogposts/:blogpostID', isAuth, blogposts.replaceOne);
// not used:
// router.patch(
//   '/blogposts/:blogpostID',
//   isAuth,
//   blogposts.updateOneBlogpost
// );

// upload
const profilePicUpload = require(__basedir + '/services/profilePicUpload');
// const blogpostPicsUpload = require(__basedir + '/services/blogpostPicsUpload');

router.post('/upload/profilepic', profilePicUpload, upload.profilePicUpload);

// router.post(
//   '/upload/blogpostpics',
//   blogpostPicsUpload,
//   upload.blogpostPicsUpload
// );

router.post('/upload/blogpostpics', upload.blogpostPicsUpload);

// /test
router.get('/test/error', test.testError);
router.get('/test', test.testFunction);

module.exports = router;
