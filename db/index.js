// // // // // // VARIABLES // // // // // //

const { Pool } = require("pg");

const {
  user,
  host,
  database,
  password,
  port,
} = require("../secrets/db_configuration");

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "blogdb",
  password: "node_password",
  port: 5432,
});

// // // // // // EXPORTS // // // // // //

pool.query("SELECT * FROM users", (err, res) => {
  if (err) return console.log(err);
  console.log(res.rows);
});

module.exports = pool;
