const server = require('./index');

module.exports = function (str) {
    server.get('/', (from, to) => {
        if (str) to.send(str);
    });
};
