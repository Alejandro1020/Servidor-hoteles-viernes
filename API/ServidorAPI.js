import  express  from 'express'
import {rutasPersonalizadas}from'../Routes/Rutas.js'
import { conectarConMongo } from '../Database/conexion.js'

export class ServidorAPI{

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticiones()
    }

    // Metodos de la clase ServidorAPI
    levantarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("Exito encendiendo el servidor "+process.env.PORT);
        })
    }

    atenderPeticiones(){
       this.app.use('/', rutasPersonalizadas)
          
    }

    conectarConBD(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(express.json())
    }
}