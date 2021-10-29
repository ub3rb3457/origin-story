// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const pool = require("../db");
const router = Router();

// // // // // // GET METHOLDS // // // // // //

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM hashtags", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // get by blog_id

router.get("/blog/:blog_id", (request, response, next) => {
  const { blog_id } = request.params;
  pool.query(
    "SELECT * FROM hashtags WHERE blog_id = $1",
    [blog_id],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // get by hashtag

router.get("/hashtag/:hashtag", (request, response, next) => {
  const { hashtag } = request.params;
  pool.query(
    "SELECT * FROM hashtags WHERE hashtag = $1",
    [hashtag],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (request, response, next) => {
  const { user_id, blog_id, hashtag } = request.body;
  pool.query(
    "INSERT INTO hashtags(user_id, blog_id, hashtag) VALUES ($1, $2, $3)",
    [user_id, blog_id, hashtag],
    (err, res) => {
      if (err) return next(err);
      response.redirect("/hashtags");
    }
  );
});

// // // // // // PUT METHOLDS // // // // // //

// router.put("/:hashtag/:blog_id", (request, response, next) => {
//   const { hashtag, blog_id } = request.params;
//   const keys = ["hashtag"];
//   const fields = [];
//   keys.forEach((key) => {
//     if (request.body[key]) fields.push(key);
//   });

//   fields.forEach((field, index) => {
//     pool.query(
//       `UPDATE hashtags SET ${field}=($1) WHERE hashtag=($2) AND blog_id=($3)`,
//       [request.body[field], hashtag, blog_id],
//       (err, res) => {
//         if (err) return next(err);
//         if (index === fields.length - 1) response.redirect("/ldblogs");
//       }
//     );
//   });
// });

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/:hashtag/:blog_id", (request, response, next) => {
  const { hashtag, blog_id } = request.params;
  pool.query(
    "DELETE FROM hashtags WHERE hashtag=($1) AND blog_id=($2)",
    [hashtag, blog_id],
    (err, res) => {
      if (err) return next(err);

      response.redirect("/hashtags");
    }
  );
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
