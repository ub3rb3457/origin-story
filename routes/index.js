// // // // // // VARIABLES // // // // // //

const { Router } = require("express");
const users = require("./users");
// const habitats = require("./habitats");
// const lives = require("./lives");

const router = Router();

// // // // // // ROUTER USES // // // // // //

router.use("/users", users);
// router.use("/habitats", habitats);
// router.use("/lives", lives);

// // // // // // EXPORTS // // // // // //

module.exports = router;
