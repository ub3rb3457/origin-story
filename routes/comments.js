// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const pool = require("../db");
const router = Router();

// // // // // // GET METHOLDS // // // // // //

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM comments ORDER BY id ASC", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("SELECT * FROM comments WHERE id = $1", [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // get by user_id

router.get("/:user_id", (request, response, next) => {
  const { user_id } = request.params;
  pool.query(
    "SELECT * FROM comments WHERE user_id = $1",
    [user_id],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // get by blog_id

router.get("/:blog_id", (request, response, next) => {
  const { blog_id } = request.params;
  pool.query(
    "SELECT * FROM comments WHERE blog_id = $1",
    [blog_id],
    (err, res) => {
      if (err) return next(err);
      response.json(res.rows);
    }
  );
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (request, response, next) => {
  const { user_id, blog_id, content } = request.body;
  pool.query(
    "INSERT INTO comments(user_id, blog_id, content) VALUES ($1, $2, $3)",
    [user_id, blog_id, content],
    (err, res) => {
      if (err) return next(err);
      response.redirect("/comments");
    }
  );
});

// // // // // // PUT METHOLDS // // // // // //

router.put("/:id", (request, response, next) => {
  const { id } = request.params;
  const keys = ["user_id", "blog_id", "content"];
  const fields = [];
  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE comments SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);
        if (index === fields.length - 1) response.redirect("/comments");
      }
    );
  });
});

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("DELETE FROM comments WHERE id=($1)", [id], (err, res) => {
    if (err) return next(err);

    response.redirect("/comments");
  });
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
