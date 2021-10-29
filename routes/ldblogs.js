// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const pool = require("../db");
const router = Router();

// // // // // // GET METHOLDS // // // // // //

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM ldblogs", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // get by blog_id

router.get("/:blog_id", (request, response, next) => {
  const { blog_id } = request.params;
  pool.query(
    "SELECT * FROM ldblogs WHERE blog_id = $1",
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
    "SELECT * FROM ldblogs WHERE user_id = $1",
    [user_id],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (request, response, next) => {
  const { user_id, blog_id, type } = request.body;
  pool.query(
    "INSERT INTO ldblogs(user_id, blog_id, type) VALUES ($1, $2, $3)",
    [user_id, blog_id, type],
    (err, res) => {
      if (err) return next(err);
      response.redirect("/ldblogs");
    }
  );
});

// // // // // // PUT METHOLDS // // // // // //

router.put("/:user_id/:blog_id", (request, response, next) => {
  const { user_id, blog_id } = request.params;
  const keys = ["type"];
  const fields = [];
  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE ldblogs SET ${field}=($1) WHERE user_id=($2) AND blog_id=($3)`,
      [request.body[field], user_id, blog_id],
      (err, res) => {
        if (err) return next(err);
        if (index === fields.length - 1) response.redirect("/ldblogs");
      }
    );
  });
});

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/:user_id/:blog_id", (request, response, next) => {
  const { user_id, blog_id } = request.params;
  pool.query(
    "DELETE FROM ldblogs WHERE user_id=($1) AND blog_id=($2)",
    [user_id, blog_id],
    (err, res) => {
      if (err) return next(err);

      response.redirect("/ldblogs");
    }
  );
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
