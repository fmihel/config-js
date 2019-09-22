const express = require('express');
const expressWs = require('express-ws');
const config = require('./config');

const app = express();
expressWs(app);
// expressWs = expressWs(express());
// const aWss = expressWs.getWss('/');
const list = [];

// expressWs(app);
app.use(express.static(config.public));
/*
app.use((req, res, next) => {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});
/*
app.get('/', (req, res, next) => {
    console.log('get route', req.testing);
    res.end();
});
*/

app.ws('/', (ws, req) => {
    // ws.on('message', (msg) => {
    //    console.log(msg);
    // });
    // ws.send('ALERT IS SEND MSG');
    list.push(ws);
    // console.log('socket testing', req.testing);
});

setInterval(() => {
    // console.info('send');
    // send('text');
    // app.ws.send('text');
    let i = 0;
    while (i < list.length) {
        const ws = list[i];
        try {
            ws.send('text');
            i++;
        } catch (e) {
            list.splice(i, 1);
        }
    }
    console.info('send');
}, 5000);

app.listen(config.port, (err) => {
    if (err) return console.error(err);
    console.log(`server start on port: ${config.port}`);
    console.log(`use http://localhost:${config.port}/   or  http://127.0.0.1:${config.port}/ `);

    return undefined;
});

/*
const express = require('express');
// const expressWs = require('express-ws')(app);

const app = express();
const config = require('./config');

app.use(express.static(config.public));
// app.ws('/', (ws, req) => {
//    ws.on('message', (msg) => {
//        console.log(msg);
//    });
//    console.log('socket', req.testing);
// });

app.listen(config.port, (err) => {
    if (err) { return console.error(err); }
    console.log(`server start on port: ${config.port}`);
    console.log(`use http://localhost:${config.port}/   or  http://127.0.0.1:${config.port}/ `);
    return undefined;
});
*/
module.exports = app;
