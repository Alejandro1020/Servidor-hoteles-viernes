import  express  from 'express'
import { ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import{ControladorReservas}from'../Controllers/ControladorReservas.js'

let controladorHabitacion=new ControladorHabitacion()// usando el controlador
let controladorReservas= new ControladorReservas()

export let rutasPersonalizadas=express.Router()


rutasPersonalizadas.get('/hotelesPlace/habitaciones', controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesPlace/habitacion/:idHabitacion', controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesPlace/habitacion', controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesPlace/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/HotelesPlace/reservas', controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hotelesPlace/reservasPorId/:id', controladorReservas.buscarReservasPorId)
rutasPersonalizadas.post('/hotelesPlace/reservas', controladorReservas.registrarReserva)
rutasPersonalizadas.put('/hotelesPlace/reservas/:id', controladorReservas.editarReserva)
rutasPersonalizadas.delete('/hotelesPlace/eliminarReservas/:id', controladorReservas.eliminarReserva)