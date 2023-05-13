const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth login
exports.googleLogin = async (req, res) => {
  const { tokenId } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { name, email, sub } = ticket.getPayload();
  const user = await User.findOne({ email });
  if (user) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie('t', token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  } else {
    const newUser = await User.create({ name, email, password: sub });
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
    res.cookie('t', token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = newUser;
    return res.json({ token, user: { _id, name, email, role } });
  }
};

// User dashboard
exports.userDashboard = (req, res) => {
  User.findById(req.auth._id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    user.password = undefined;
    res.json(user);
  });
};

// User logout
exports.userLogout = (req, res) => {
  res.clearCookie('t');
  return res.json({ message: 'Logout success' });
};