import * as fastify from 'fastify';
import * as http from 'http';

export class Server {
    private _instance: fastify.FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>;

    constructor() {
        this.init();
        this.start()
    }

    private init() {
        this._instance = fastify();

        this._instance.get('/status',  function (request: fastify.FastifyRequest, reply: fastify.FastifyReply<http.ServerResponse>) {
            reply.send({msg: 'Running'});
        });
    }

    private start() {
        this._instance.listen(3000).then(() => {
            console.log('Server listening on 3000.');
        });
    }
}

module.exports = new Server();
