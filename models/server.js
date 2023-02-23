const express = require('express');
const cors = require('cors');



class Server {

    constructor(){
        this.app = express();
        this.router();
        this.port = process.env.PORT ;
        this.middelewares();
    }

    router(){
        this.app.use('/', require('../routes/routes'))
        
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port', this.port);
        });

    }
    middelewares(){

        //motor de hbs para los handerbars
        this.app.set('view engine', 'hbs');
        //directorio static
        this.app.use(express.static('public'));
        this.app.use(cors());

        //para obtener datos del front en json
        this.app.use(express.json());
    }

    

}

module.exports = Server;