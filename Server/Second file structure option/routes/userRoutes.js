const express = require('express');
const router = express.Router();

// Define your routes here using router.get(), router.post(), router.put(), and router.delete()

router.get('/', (req, res) => {
  res.send('Hello, user!');
});

module.exports = router;