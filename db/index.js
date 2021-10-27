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

// // // // // // REQUESTS // // // // // //

pool.query("SELECT * FROM users", (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});

module.exports = pool;
