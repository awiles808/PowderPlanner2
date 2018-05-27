//create a new express router- good practice to keep routing seperate.
const express = require('express'),
  router = express.Router();

  //export Router
  module.exports = router;

//define routes
router.get('/', (req, res) => {
  res.send('Hello, I is the app!')
});
