import { ServicioHabitacion } from "../Services/ServicioHabitacion.js";
export class ControladorHabitacion{

    constructor (){}

   async buscarHabitaciones(request, response){

        let objetoServicioHabitaciones= new ServicioHabitacion()

        try {
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objetoServicioHabitaciones.buscarHabitaciones(),
                
            })
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        
        

        //response.send("Estoy buscando habitaciones desde el controlador")
    }

   async buscarHabitacionPorId(request, response){

        let datosenviadosenurl= request.params.idHabitacion
        console.log('El dato es '+datosenviadosenurl);
        let objetoServicioHabitacion = new ServicioHabitacion()

        try {

            response.status(200).json({
                "mensaje":"Exito en la consulta" + datosenviadosenurl,
                "datos":await  objetoServicioHabitacion.buscarHabitacioPorId(datosenviadosenurl)
                
            })
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }

        //response.send("Estoy buscando una habitacion por id desde el controlador")
    }

    async registrarHabitacion(request, response){

        let datosHabitacion=request.body// obtengo datos del body
        let objetoServicioHabitacion = new ServicioHabitacion()
        
        try {
            

            if (datosHabitacion.numeroMaximoPersonas<8) {

                await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
                response.status(200).json({
                    "mensaje":"Exito registrando habitacion",
                    "datos":null
                })
            }
            else{
                response.status(400).json({
                    "mensaje":"No caben tantas personas",
                    "datos":null

                })

            }
           
           
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }

       // response.send("Estoy agregando  desde el controlador")
    }

    async editarHabitacion(request, response){

        let id = request.params.idHabitacion
        let datosHabitacion=request.body
        
        let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            
             await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)
            response.status(200).json({
                "mensaje":"Exito editando"+id,
                "datos":null,
                
            })
            
        } catch (error) {
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("Estoy editando  desde el controlador")
    }

}