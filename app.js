require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const cookieSession = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(
  cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

const port = process.env.PORT || 3000;

// const url = process.env.MONGO_URL;
const url = 'mongodb+srv://dbUser:' + process.env.MONGO_PW + '@cluster0.dq3y7.mongodb.net/' + process.env.MONGO_DB;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
  console.error('😱Something went wrong: ' + err);
});

// ==========================================================================

app.get('/', (req, res) => {
  res.send(
    `<h1>REST-API for Around The World-Blog</h1>
    <h2>Server is working</h2>
    <hr>
    <h3>/blogposts</h3>
    <p>GET - POST - DELETE</>
    <h3>/blogposts/:blogpostID</h3>
    <p>GET - PUT - PATCH - DELETE</>
    <hr>
    <h3>/users</h3>
    <p>GET - POST - DELETE</>
    <h3>/users/:userID</h3>
    <p>GET - PUT - PATCH - DELETE</>
    <hr>
    <h3>/auth</h3>
    <p> POST - /login</p>
    <p> GET - /logout</p>
    <p> GET - /user</p>
    `
  );
});

// ==========================================================================
// auth
// ==========================================================================
let users = [
  {
    id: 1,
    name: 'Steffen Häfelinger',
    email: 's.haefelinger@gmx.de',
    password: 'x',
  },
  {
    id: 2,
    name: 'XX',
    email: 'x@x.com',
    password: 'x',
  },
];

app.post('/auth/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log(user);
    if (err) {
      return next(err);
    }

    if (!user) {
      console.log('🚫Cannot log in');
      return res.status(400).send([user, '🤷‍♂️Cannot log in', info]);
    }

    req.login(user, (err) => {
      res.send('👍Logged in');
    });
  })(req, res, next);
});

app.get('/auth/logout', function (req, res) {
  req.logout();
  console.log('logged out');
  return res.send('user logged out');
});

const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log('🚫not auth');
    res.status(401).send('You are not authenticated');
  } else {
    console.log('👍auth');
    return next();
  }
};

app.get('/auth/', (rw, res) => {
  res.send('auth is kinda working');
});

app.get('/auth/user', authMiddleware, (req, res) => {
  let user = users.find((user) => {
    return user.id === req.session.passport.user;
  });
  res.send({ user: user });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },

    (username, password, done) => {
      let user = users.find((user) => {
        return user.email === username && user.password === password;
      });

      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: 'Incorrect username or password' });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  let user = users.find((user) => {
    return user.id === id;
  });

  done(null, user);
});
// ==========================================================================
// Blogposts
// ==========================================================================

const blogpostSchema = mongoose.Schema({
  name: String,
  longName: String,
  coords: { lat: Number, lng: Number },
  title: String,
  description: String,
  rating: String,
  month: String,
  year: String,
  image1URL: String,
  image2URL: String,
  wiki: String,
  utcOffset: Number,
  authorID: String,
});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

///////////////////// request for ALL blogposts
app
  .route('/blogposts')
  .get((req, res) => {
    console.log('auth_header:', req.headers.auth_header);
    Blogpost.find((err, foundBlogposts) => {
      console.log('GET all blogposts');
      if (!err) {
        res.send(foundBlogposts);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    console.log('POST new blogpost');

    const newBlogpost = new Blogpost(req.body);
    newBlogpost.save((err) => {
      if (!err) {
        res.send('Succesfully added a new blogpost: ' + newBlogpost.name);
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    console.log('DELETE all blogposts');
    Blogpost.deleteMany((err) => {
      if (!err) {
        res.send('Successfully deleted ALL blogposts.');
      } else {
        res.send(err);
      }
    });
  });

///////////////////// request for a specific blogpost
app
  .route('/blogposts/:blogpostID')
  .get((req, res) => {
    console.log('GET one blogpost');
    Blogpost.findOne({ _id: req.params.blogpostID }, (err, foundBlogpost) => {
      if (foundBlogpost) {
        res.send(foundBlogpost);
      } else {
        res.send('No Blogpost found');
      }
    });
  })

  .put((req, res) => {
    console.log('PUT');
    // console.log(req.body);
    Blogpost.replaceOne({ _id: req.params.blogpostID }, req.body, (err, results) => {
      if (!err) {
        res.send(results);
      } else {
        res.send(err);
      }
    });
  })

  .patch((req, res) => {
    console.log('PATCH');
    Blogpost.updateOne({ _id: req.params.blogpostID }, { $set: req.body }, (err, results) => {
      if (!err) {
        res.send(results);
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Blogpost.deleteOne({ _id: req.params.blogpostID }, (err) => {
      if (!err) {
        res.send('🚫successfully deleted ONE Blogpost');
      } else {
        res.send(err);
      }
    });
  });

// ==========================================================================
// Users
// ==========================================================================

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
});

const User = mongoose.model('User', userSchema);

///////////////////// request for ALL users
app
  .route('/users')
  .get((req, res) => {
    User.find((err, foundUsers) => {
      console.log('GET all Users');
      if (!err) {
        res.send(foundUsers);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    console.log('POST new user', req.body);

    const newUser = new User(req.body);
    newUser.save((err) => {
      if (!err) {
        res.send('Succesfully added a new user: ' + newUser.name);
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    console.log('DELETE all Users');
    User.deleteMany((err) => {
      if (!err) {
        res.send('Successfully deleted ALL users');
      } else {
        res.send(err);
      }
    });
  });
///////////////////// request for a specific user
app
  .route('/users/:userID')
  .get((req, res) => {
    console.log('GET one user');
    User.findOne({ _id: req.params.userID }, (err, foundUser) => {
      if (foundUser) {
        res.send(foundUser);
      } else {
        res.send('No User found');
      }
    });
  })

  .put((req, res) => {
    console.log('PUT user');
    // console.log(req.body);
    User.replaceOne({ _id: req.params.userID }, req.body, (err, results) => {
      if (!err) {
        res.send(results);
      } else {
        res.send(err);
      }
    });
  })

  .patch((req, res) => {
    console.log('PATCH user');
    User.updateOne({ _id: req.params.userID }, { $set: req.body }, (err, results) => {
      if (!err) {
        res.send(results);
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    User.deleteOne({ _id: req.params.userID }, (err) => {
      if (!err) {
        res.send('🚫successfully deleted ONE User');
      } else {
        res.send(err);
      }
    });
  });

// ==========================================================================

app.listen(port, () => {
  console.log('=======================================================');
  console.log('👍 Server started on port ' + port);
  console.log('=======================================================');
});
