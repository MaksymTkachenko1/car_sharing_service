const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

// Rest of your code goes here

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});