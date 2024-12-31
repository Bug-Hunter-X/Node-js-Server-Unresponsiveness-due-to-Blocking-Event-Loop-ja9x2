const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation using async/await
  const start = Date.now();
  const longRunningOperation = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Long running operation completed in ${Date.now() - start}ms`);
  };
  longRunningOperation();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});