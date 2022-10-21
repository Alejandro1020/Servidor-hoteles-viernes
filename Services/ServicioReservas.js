import { modeloReserva } from "../Models/ModeloReservas.js";

export class ServicioReservas{

    async buscarReservas(){
        let reservas = await modeloReserva.find()
        return reservas
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReserva.findById(id)
    }

    async agregarReservaEnBD(datos){
        let datosValidados= new modeloReserva(datos)
        return await datosValidados.save()
    }

    async editarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async eliminarReserva(id,datos){
        return await modeloReserva.findByIdAndDelete(id,datos)
    }

}