const express = require('express');
const cors = require('cors');
const conectarDB = require('../database/config.js')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.ciclista = "/api/ciclista/"

        this.conectarDB()
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    async conectarDB(){
        await conectarDB();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.ciclista,require('../routes/ciclista.routes.js'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`SERVER IS RUNNING ON PORT${this.port}`);
        })
    }
}

module.exports = Server