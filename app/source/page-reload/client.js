import _ from 'lodash';

function client(params) {
    const a = _.defaultsDeep(params, {
        port: 3000,
    });
    const ws = new WebSocket(`ws://localhost:${a.port}`); // event emmited when connected

    ws.onopen = () => {
        console.log('page-reload connect: ok'); // sending a send event to websocket server
        // ws.send('connected');
    }; // event emmited when receiving message

    ws.onmessage = (ev) => {
        // console.log(ev);
        document.location.reload(true);
    };
}
export default client;
