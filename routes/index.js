// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const router = Router();

const routes = [
  "users",
  "blogs",
  "comments",
  "savedblogs",
  "ldblogs",
  "authorblogs",
  "hashtags",
];

// // // // // // ROUTER USES // // // // // //

routes.forEach((route) => {
  router.use(`/${route}`, require(`./${route}`));
});

// // // // // // EXPORTS // // // // // //

module.exports = router;
