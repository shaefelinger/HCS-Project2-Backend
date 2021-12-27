const express = require('express');
const router = express.Router();

const isAuth = require(__basedir + '/middleware/isAuth');

// const { body } = require('express-validator');
// const User = require(__basedir + '/models/userModel.js');

const { userValidationRules, validate } = require(__basedir +
  '/services/validator.js');

const helpController = require(__basedir + '/controllers/helpController');
const testController = require(__basedir + '/controllers/testController');
const authController = require(__basedir + '/controllers/authController.js');
const blogpostsController = require(__basedir +
  '/controllers/blogpostsController.js');
const uploadController = require(__basedir +
  '/controllers/uploadController.js');

// / root
router.get('/', function (req, res) {
  res.status(200).send('A request was made to the root');
});

// ==========================================================================
// Deploy vue-app
// ==========================================================================
// const publicRoot = __basedir + '/dist';

// router.get('/', (req, res, next) => {
//   console.log('serve');
//   res.sendFile(publicRoot + '/index.html');
// });

// / help
router.get('/help', helpController.getHelp);

// auth
router.get('/auth', authController.getIndex);

router.post(
  '/auth/signup',
  userValidationRules(),
  validate,
  authController.signup
);

router.post('/auth/login', authController.login);

// blogposts
router.get('/blogposts', blogpostsController.getAllBlogposts);
router.post('/blogposts', isAuth, blogpostsController.postNewBlogpost);
router.get('/blogposts/:blogpostID', blogpostsController.getOneBlogpost);
router.delete(
  '/blogposts/:blogpostID',
  isAuth,
  blogpostsController.deleteOneBlogpost
);
router.put(
  '/blogposts/:blogpostID',
  isAuth,
  blogpostsController.replaceOneBlogpost
);
// not used:
// router.patch(
//   '/blogposts/:blogpostID',
//   isAuth,
//   blogpostsController.updateOneBlogpost
// );

// upload
const profilePicUpload = require(__basedir + '/services/profilePicUpload');
// const blogpostPicsUpload = require(__basedir + '/services/blogpostPicsUpload');

router.post(
  '/upload/profilepic',
  profilePicUpload,
  uploadController.profilePicUpload
);

// router.post(
//   '/upload/blogpostpics',
//   blogpostPicsUpload,
//   uploadController.blogpostPicsUpload
// );

router.post('/upload/blogpostpics', uploadController.blogpostPicsUpload);

// /test
router.get('/test/error', testController.testError);
router.get('/test', testController.testFunction);

module.exports = router;
