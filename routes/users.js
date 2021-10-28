// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const pool = require("../db");
const router = Router();

// // // // // // GET METHOLDS // // // // // //

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("SELECT * FROM users WHERE id = $1", [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// // // // // // POST METHOLDS // // // // // //

router.post("/", (request, response, next) => {
  const { name, email, password } = request.body;
  pool.query(
    "INSERT INTO users(username, email, password) VALUES ($1, $2, $3)",
    [name, email, password],
    (err, res) => {
      if (err) return next(err);
      //To redirect the user to users
      response.redirect("/users");
    }
  );
});

// // // // // // PUT METHOLDS // // // // // //

router.put("/:id", (request, response, next) => {
  const { id } = request.params;
  const keys = ["name", "email", "password"];
  const fields = [];
  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE users SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        // redirect to users
        if (index === fields.length - 1) response.redirect("/users");
      }
    );
  });
});

// // // // // // DELETE METHOLDS // // // // // //

router.delete("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("DELETE FROM users WHERE id=($1)", [id], (err, res) => {
    if (err) return next(err);

    response.redirect("/users");
  });
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
