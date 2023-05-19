const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Admin dashboard
exports.adminDashboard = (req, res) => {
  User.find().exec((err, users) => {
    if (err || !users) {
      return res.status(400).json({
        error: 'Users not found',
      });
    }
    users.forEach((user) => {
      user.password = undefined;
    });
    res.json(users);
  });
};