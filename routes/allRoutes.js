const express = require('express');
const router = express.Router();

const isAuth = require(__basedir + '/middleware/isAuth');

const helpController = require(__basedir + '/controllers/helpController');
const testController = require(__basedir + '/controllers/testController');
const authController = require(__basedir + '/controllers/authController.js');
const blogpostsController = require(__basedir +
  '/controllers/blogpostsController.js');

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
router.put('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);
router.get('/status', isAuth, authController.getUserStatus);

// blogposts
router.get('/blogposts', blogpostsController.getAllBlogposts);
router.post('/blogposts', blogpostsController.postNewBlogpost);
router.get('/blogposts/:blogpostID', blogpostsController.getOneBlogpost);
router.delete('/blogposts/:blogpostID', blogpostsController.deleteOneBlogpost);
router.put('/blogposts/:blogpostID', blogpostsController.replaceOneBlogpost);
router.patch('/blogposts/:blogpostID', blogpostsController.updateOneBlogpost);

// /test
router.get('/test/error', testController.testError);

module.exports = router;
