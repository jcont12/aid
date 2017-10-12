const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'Databasepwd1.',
  database: 'test'
})
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $gt: Op.gt
}
const sequelize = new Sequelize('test','admin','Databasepwd1.', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection succesfully established');
  })
  .catch((err) => {
    console.log('There is a connection in ERROR');
  });

// connection.connect((err) => {
//  if (err) throw err;
//  console.log('Connected!');
// });



// Init app
const app = express();

//Load view engine
app.engine('ejs', ejs.renderFile);
app.set('views',[path.join(__dirname,'views'),
                 path.join(__dirname,'views/users/')]);
app.set('view engine','ejs')

//Home route
app.get('/',(req,res) => {
  res.render('index', {
    title:'Welcome to Aidup!!'

  });
})

// Add new user
app.get('/users/new',(req,res) => {
  res.render('new')
});

//Start Server
app.listen(3000,() => {
  console.log('server started on port 3000')
})

// Ends database connection
// connection.end((err) => {
//   console.log('Connection ended. Have a good day!')
// });
