import { ServicioReservas } from "../Services/ServicioReservas.js";
import { ServicioHabitacion } from "../Services/ServicioHabitacion.js";
export class ControladorReservas{

    constructor(){}

    async buscarReservas(request, response){
        let objetoServicioReservas= new ServicioReservas()

        try {
            response.status(200).json({
                "mensaje":"Exito en la consulta de reservas",
                "datos":await objetoServicioReservas.buscarReservas(),
            })
        } catch (error) {
            response.status(400).json({
                "mensaje":"Error en la consulta de reserva"+error,
                "datos":null
            })
        }
        
    }

    async buscarReservasPorId(request, response){

       
        let datosenviadosenurl= request.params.id
        console.log('El dato es'+datosenviadosenurl);
        let objetoServicioReservas=new ServicioReservas()
        try {
            response.status(200).json({
                "mensaje":"Exito en la consulta" + datosenviadosenurl,
                "datos":await objetoServicioReservas.buscarReservasPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                "mensaje":"Error en la consulta de reserva"+error,
                "datos":null
            })
            
        }
    }

    async registrarReserva(request, response){

        let objetoServicioHabitacion= new ServicioHabitacion()

      

        let datosReserva=request.body //obtengo datos del body
        let habitacion = await objetoServicioHabitacion.buscarHabitacioPorId(datosReserva.idHabitacion)
        let objetoServicioReservas = new ServicioReservas()
        let totalPersonas=datosReserva.numeroAdultos+datosReserva.numeroNinos
        let totalDias= (new Date (datosReserva.fechaSalida)- new Date (datosReserva.fechaEntrada))/(1000*3600*24)
        let totalReserva=totalDias*habitacion.valorNoche

        console.log(datosReserva);
        console.log("Total personas "+totalPersonas);
        console.log("Total dias "+totalDias);
        console.log("Costo de la reservación "+totalReserva);

       

       try {
        
        if(totalPersonas<8 )
        {await objetoServicioReservas.agregarReservaEnBD(datosReserva)
            response.status(200).json({
                "mensaje":"Exito Registrando reserva",
                "datos":null
                
            })
        }else{
            response.status(400).json({
                "mensaje":"No caben tantas personas",
                "datos":null

            })

        }
       
        
        

        
        
       } catch (error) {
        response.status(400).json({
            "mensaje":"Error en la consulta de reservas"+error,
            "datos":null
        })
       }

        // response.send("Estoy agregando una reserva  desde el controlador")
    }

    async editarReserva(request, response){
        let id = request.params.idReservas
        let datosReservas=request.body

        let objetoServicioReservas = new ServicioReservas()

        try {
            await objetoServicioReservas.editarReserva(id,datosReserva)
            response.status(200).json({
                "mensaje":"Exito editando"+idReservas
            })
        } catch (error) {
            
            response.status(400).json({
                "mensaje":"Error en la consulta de reserva"+error,
                "datos":null
            })
        }
        // response.send("Estoy editando una reserva desde el controlador")
    }

    eliminarReserva(request,response){
        response.send("Estoy eliminando una reserva desde el controlador")
    }

}