import _ from 'lodash';
import expressWs from 'express-ws';

class Server {
    constructor() {
        this.params = {
            port: 3000,
            app: undefined,
        };

        this.list = [];
    }

    init(params) {
        this.params = _.defaultsDeep(params, this.params);
    }

    refresh() {
        let i = 0;
        while (i < this.list.length) {
            const ws = this.list[i];
            try {
                ws.send('command:refresh');
                i++;
            } catch (e) {
                this.list.splice(i, 1);
            }
        }
    }
}

export default server;
