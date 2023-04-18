const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Route handler for GET /hello
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Route handler for POST /
app.post('/', (req, res) => {
  const data = req.body;
  console.log('Received message:', data);
  res.send('OK');
});

// Default route handler for all other requests
app.use((req, res) => {
  res.status(405).send('Method Not Allowed');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
