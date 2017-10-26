// const models = require("../models").User;

const express = require('express');
const router = express.Router();

// new user route
router.get('/new',(req, res) => {
  res.render('users/new.ejs', { root:__dirname + '/../views'});
});


module.exports = router;




// {
//   newUser: newUser,
  // createUser: createUser
// }
