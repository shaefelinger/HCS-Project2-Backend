require('dotenv').config();
global.__basedir = __dirname;

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({ credentials: true, origin: '*' }));
// app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
// app.use(cors());

app.use(express.json());
// app.use(express.static(__dirname + '/public'));

const allRoutes = require(__basedir + '/routes/allRoutes');
const errorHandler = require(__basedir + '/error/errorHandler');

app.use('/', allRoutes);
app.use(errorHandler);

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_URL;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log('Connected to MongoDB and server started on port ' + port);
    });
  })
  .catch((err) => {
    console.error('😱Something went wrong: ' + err);
  });

// ==========================================================================

// ==========================================================================
// Users
// ==========================================================================

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   profilePic: String,
// });

// const User = mongoose.model('User', userSchema);

///////////////////// request for ALL users
// app
//   .route('/users')
//   .get((req, res) => {
//     User.find((err, foundUsers) => {
//       console.log('GET all Users');
//       if (!err) {
//         res.send(foundUsers);
//       } else {
//         res.send(err);
//       }
//     });
//   })
//   .post((req, res) => {
//     console.log('POST new user', req.body);
//     const newUser = new User(req.body);
//     newUser.save((err) => {
//       if (!err) {
//         console.log('Succesfully added a new user: ' + newUser.name);
//         updateUsersFromDB();
//         res.send('Succesfully added a new user: ' + newUser.name);
//       } else {
//         console.log('Error adding a new user');
//         res.send(err);
//       }
//     });
//   })
//   .delete((req, res) => {
//     console.log('DELETE all Users');
//     User.deleteMany((err) => {
//       if (!err) {
//         updateUsersFromDB();
//         res.send('Successfully deleted ALL users');
//       } else {
//         res.send(err);
//       }
//     });
//   });
// ////////////////////// request for a specific user
// app
//   .route('/users/:userID')
//   .get((req, res) => {
//     console.log('GET one user');
//     User.findOne({ _id: req.params.userID }, (err, foundUser) => {
//       if (foundUser) {
//         res.send(foundUser);
//       } else {
//         res.send('No User found');
//       }
//     });
//   })

//   .put((req, res) => {
//     console.log('PUT user');
//     // console.log(req.body);
//     User.replaceOne({ _id: req.params.userID }, req.body, (err, results) => {
//       if (!err) {
//         updateUsersFromDB();
//         res.send(results);
//       } else {
//         res.send(err);
//       }
//     });
//   })

//   .patch((req, res) => {
//     console.log('PATCH user');
//     User.updateOne(
//       { _id: req.params.userID },
//       { $set: req.body },
//       (err, results) => {
//         if (!err) {
//           console.log('patched one user');
//           updateUsersFromDB();
//           res.send(results);
//         } else {
//           res.send(err);
//         }
//       }
//     );
//   })
//   .delete((req, res) => {
//     User.deleteOne({ _id: req.params.userID }, (err) => {
//       if (!err) {
//         updateUsersFromDB();
//         res.send('🚫successfully deleted ONE User');
//       } else {
//         res.send(err);
//       }
//     });
//   });

// hardcoded users for testing
// let users = [
//   {
//     _id: 1,
//     index: 11,
//     name: 'Test User_hc',
//     email: 'testuser@test.com',
//     password: 'test123',
//   },
//   {
//     _id: 2,
//     index: 22,
//     name: 'XX_hc',
//     email: 'x@x.com',
//     password: 'x',
//   },
//   {
//     _id: 3,
//     index: 33,
//     name: 'Steffen Häfelinger_hc',
//     email: 's.haefelinger@gmx.de',
//     password: 'x',
//   },
// ];

// ==========================================================================
// auto-load the users for auth
// ==========================================================================
// function updateUsersFromDB() {
//   users = [];
//   User.find((err, foundUsers) => {
//     console.log('GET all Users automatically');
//     if (!err) {
//       users = foundUsers;
//       console.log('👍auto', users);
//     } else {
//       console.log('🤯 auto did not work', err);
//     }
//   });
// }
// let users = [];
// updateUsersFromDB();

// ==========================================================================
// auth
// ==========================================================================

// app.post('/auth/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     console.log(user);
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       console.log('🚫Cannot log in');
//       return res.status(400).send([user, '🤷‍♂️Cannot log in', info]);
//     }
//     req.login(user, (err) => {
//       console.log('👍Logged in');
//       console.log('login:', user);
//       res.send(user);
//     });
//   })(req, res, next);
// });

// app.get('/auth/logout', function (req, res) {
//   req.logout();
//   console.log('logged out');
//   return res.send('user logged out');
// });

// const authMiddleware = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     console.log('🚫not auth');
//     res.status(401).send('You are not authenticated');
//   } else {
//     console.log('👍auth');
//     return next();
//   }
// };

// app.get('/auth/', (rw, res) => {
//   res.send('auth is working');
// });

// app.get('/auth/user', authMiddleware, (req, res) => {
//   console.log('/auth/user:', req.session.passport);

//   let user = users.find((user) => {
//     return user._id == req.session.passport.user._id;
//   });
//   res.send({ user: user });
// });

// ==========================================================================
