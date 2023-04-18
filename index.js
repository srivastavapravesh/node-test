const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');

// Create a server to receive POST requests from SNS
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/') { // Route for handling POST requests to the root URL
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('Received message:', data);
        res.end('OK');
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.statusCode = 400;
        res.end('Bad Request');
      }
    });
  } else if (req.method === 'GET' && req.url === '/hello') { // Route for handling GET requests to /hello
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  } else { // Default route handler for all other requests
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
