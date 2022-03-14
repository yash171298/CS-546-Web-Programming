const express = require('express');
const router = express.Router();
const todoData = require('../data');
const xss = require('xss');




  router.get('/', (req, res) => {
    res.render('shows/static', {});
  });
module.exports = router;