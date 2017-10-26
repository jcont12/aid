const express = require('express');
const router = express.Router();

// Landing page
router.get('/',(req, res) => {
  res.render('index', {
    title:'Welcome to Aidup!!'
  });
});

module.exports = router;
