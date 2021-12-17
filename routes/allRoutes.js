const express = require('express');
const router = express.Router();

const helpController = require(__basedir + '/controllers/helpController');
const testController = require(__basedir + '/controllers/testController');
const authController = require(__basedir + '/controllers/authController.js');
const blogpostsController = require(__basedir +
  '/controllers/blogpostsController.js');

// / root
router.get('/', function (req, res) {
  res.status(200).send('A request was made to the root');
});

// / help
router.get('/help', helpController.getHelp);

// auth
router.get('/auth', authController.getIndex);
router.get('/auth/users', authController.getUsers);

// blogposts
router.get('/blogposts', blogpostsController.getAllBlogposts);
router.post('/blogposts', blogpostsController.postNewBlogpost);

// /test
router.get('/test/error', testController.testError);

module.exports = router;
