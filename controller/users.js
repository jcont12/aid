const models = require("../models").User;

const newUser = (req, res) => {
  res.render('new',{
  })
};

const createUser = (req, res) => {
      return User
      .create({
        firstName: req.body.firstName
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  }

module.exports = {
  newUser: newUser,
  createUser: createUser
}
