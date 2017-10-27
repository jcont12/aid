// const models = require("../models").User;

const express = require('express');
const router = express.Router();

// new user route
router.get('/new',(req, res) => {
  res.render('users/new.ejs');
});

//  Create user router
router.post('', (req,res) => {
  const firstName = req.body.firstname;
  const bio = req.body.bio;
  res.send(`Ive got a Post with ${firstName}`)
})


module.exports = router;



// METHOD WITHOUT USING ROUTER
//
// const models = require("../models").User;
//
// const newUser = (req, res) => {
//   res.render('new',{
//   })
// };
//
// const createUser = (req, res) => {
//       return User
//       .create({
//         firstName: req.body.firstName
//       })
//       .then(user => res.status(201).send(user))
//       .catch(error => res.status(400).send(error))
//   }
//
// module.exports = {
//   newUser: newUser,
//   createUser: createUser
// }
