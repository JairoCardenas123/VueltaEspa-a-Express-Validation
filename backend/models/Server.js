import express from "express"
import cors from "cors"
import conectarDB from "../database/config.js"
import router from "../routes/ciclista.routes.js"

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.ciclista = "/api/ciclista"

        this.conectarDB()
        this.middlewares()
        this.routes()
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
        this.app.use(this.ciclista,router);

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`SERVER IS RUNNING ON PORT${this.port}`);
        })
    }
}

export default Server