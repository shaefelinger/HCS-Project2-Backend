// const tags = require(__basedir + '/databases/globals/tagsDB');

exports.getHelp = async (req, res, next) => {
  try {
    res.status(200).send(
      `<h1>REST-API for Around The World-Blog</h1>
          <h2>Server is running</h2>
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
  } catch (err) {
    next(err);
  }
};
