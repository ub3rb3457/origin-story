// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const pool = require("../db");
const router = Router();

// // // // // // GET METHOLDS // // // // // //

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM likedblogs", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // get by blog_id

router.get("/:blog_id", (request, response, next) => {
  const { blog_id } = request.params;
  pool.query(
    "SELECT * FROM likedblogs WHERE blog_id = $1",
    [blog_id],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // get by user_id

router.get("/:user_id", (request, response, next) => {
  const { user_id } = request.params;
  pool.query(
    "SELECT * FROM likedblogs WHERE user_id = $1",
    [user_id],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (request, response, next) => {
  const { user_id, blog_id } = request.body;
  pool.query(
    "INSERT INTO likedblogs(user_id, blog_id) VALUES ($1, $2)",
    [user_id, blog_id],
    (err, res) => {
      if (err) return next(err);
      response.redirect("/likedblogs");
    }
  );
});

// // // // // // PUT METHOLDS // // // // // //

// router.put("/:id", (request, response, next) => {
//   const { id } = request.params;
//   const keys = ["user_id", "blog_id"];
//   const fields = [];
//   keys.forEach((key) => {
//     if (request.body[key]) fields.push(key);
//   });

//   fields.forEach((field, index) => {
//     pool.query(
//       `UPDATE likedblogs SET ${field}=($1) WHERE id=($2)`,
//       [request.body[field], id],
//       (err, res) => {
//         if (err) return next(err);
//         if (index === fields.length - 1) response.redirect("/likedblogs");
//       }
//     );
//   });
// });

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/:user_id/:blog_id", (request, response, next) => {
  const { user_id, blog_id } = request.params;
  pool.query(
    "DELETE FROM likedblogs WHERE user_id=($1) AND blog_id=($2)",
    [user_id, blog_id],
    (err, res) => {
      if (err) return next(err);

      response.redirect("/likedblogs");
    }
  );
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
