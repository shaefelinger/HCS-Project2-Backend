// const tags = require(__basedir + '/databases/globals/tagsDB');

exports.getHelp = async (req, res, next) => {
  try {
    res.status(200).send(
      `<h1>REST-API for Around The World-Blog</h1>
          <h2>Server is running</h2>
          <hr>
          <h3>/blogposts</h3>
          <p>GET - POST</>
          <h3>/blogposts/:blogpostID</h3>
          <p>GET - PUT - DELETE</>
          <hr>
          <h3>/auth/signup</h3>
          <p>POST</>
          <h3>/auth/login</h3>
          <p>POST</>
          <hr>
          <h3>/upload/profilepic</h3>
          <p>POST</p>
          <h3>/help</h3>
          <p>GET</p>
          `
    );
  } catch (err) {
    next(err);
  }
};
