const express = require('express');

const server = express();
const config = require('./config');

server.use(express.static(config.public));
server.listen(config.port, (err) => {
    if (err) { return console.error(err); }
    console.log(`server start on port: ${config.port}`);
    console.log(`use http://localhost:${config.port}/   or  http://127.0.0.1:${config.port}/ `);
    return undefined;
});

module.exports = server;
