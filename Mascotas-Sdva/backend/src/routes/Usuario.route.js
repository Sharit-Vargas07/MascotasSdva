import { Router } from "express";
import { validar } from "../controllers/Usuario.controller.js";

const rutaUsuario = Router()

rutaUsuario.post('/validar', validar)

export default rutaUsuario