var express = require('express');
var router = express.Router();

// Explanation: A nameless path GET request without any parameters.
// We'll learn how to name a path in users route.
router.get('/', function(req, res, next) {
  return res.json({ message: 'Home!', data: null })
});

module.exports = router;