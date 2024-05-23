import { Router } from "express";
import { registrar, listar, actualizar, eliminar, buscar, cargarImage } from "../controllers/Mascotas.controller.js";
import { validarToken } from "../controllers/Usuario.controller.js";

const rutaMascotas = Router()

rutaMascotas.get('/listar',validarToken, listar)
rutaMascotas.post('/registrar', validarToken, cargarImage, registrar)
rutaMascotas.put('/actualizar/:id', validarToken, cargarImage, actualizar)
rutaMascotas.get('/buscar/:id',validarToken, buscar)
rutaMascotas.delete('/eliminar/:id',validarToken, eliminar)
export default rutaMascotas