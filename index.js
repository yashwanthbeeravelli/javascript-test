/* eslint no-param-reassign: 0 */
const express = require('express');

const ENV = process.env.PORT || 'localhost';
const PORT = process.env.PORT || 3000;
const app = express();

// App setup environment port
app.set('port', process.env.PORT);
app.use(express.static(`${__dirname}/public/`, { maxAge: 0, etag: false }));

// start the server in cluster
app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening at http://${ENV}:${PORT}`);
});

module.exports = app;
