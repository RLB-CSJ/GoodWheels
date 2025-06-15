// !!!
//
// ATTENTION
// This is a temporary server. Only use for UI testing purposes.
// Seung-Taek will be writing the production server.
//
// !!!

import express from 'express';

// Setup
const app = express();
const PORT = 3000;

// Handlers

app.use(express.json());
app.use('/', express.static('./'));

app.post('/login', (req, res) => {
  if (true) {
    res.redirect('/market');
  } else {
    res.redirect('/signup');
  }
});

app.listen(PORT, () => {
  console.log(`🟢 Server listening on port ${PORT}`);
});
