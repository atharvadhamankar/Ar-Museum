
// const corsAnywhere = require('cors-anywhere');

// const host = 'localhost';
// const port = 3000;

// const server = corsAnywhere.createServer({
//   originWhitelist: [], // Allow all origins
// });

// server.listen(port, host, () => {
//   console.log(`CORS Anywhere is running on http://${host}:${port}`);
// });


const corsAnywhere = require('cors-anywhere');

const host = '0.0.0.0'; // Bind to all network interfaces
const port = process.env.PORT || 3000;

const server = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
});

server.listen(port, host, () => {
  console.log(`CORS Anywhere is running on http://${host}:${port}`);
});
