// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const pool = require("../db");
const router = Router();

// // // // // // GET METHOLDS // // // // // //

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM dislikedblogs", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // get by comment id

router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("SELECT * FROM dislikedblogs WHERE id = $1", [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // get by user_id

router.get("/:user_id", (request, response, next) => {
  const { user_id } = request.params;
  pool.query(
    "SELECT * FROM dislikedblogs WHERE user_id = $1",
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
    "INSERT INTO dislikedblogs(user_id, blog_id) VALUES ($1, $2)",
    [user_id, blog_id],
    (err, res) => {
      if (err) return next(err);
      response.redirect("/dislikedblogs");
    }
  );
});

// // // // // // PUT METHOLDS // // // // // //

router.put("/:id", (request, response, next) => {
  const { id } = request.params;
  const keys = ["user_id", "blog_id"];
  const fields = [];
  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE dislikedblogs SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);
        if (index === fields.length - 1) response.redirect("/dislikedblogs");
      }
    );
  });
});

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("DELETE FROM dislikedblogs WHERE id=($1)", [id], (err, res) => {
    if (err) return next(err);

    response.redirect("/dislikedblogs");
  });
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
