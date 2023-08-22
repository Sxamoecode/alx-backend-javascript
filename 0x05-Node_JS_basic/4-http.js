const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(' Hello Holberton School!\n');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
