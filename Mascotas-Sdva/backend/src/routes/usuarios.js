import { Router } from "express";
import {  createUsuario } from "../controllers/usuarios.js";

const routerUsuario = Router();

routerUsuario.post('/crearUsuario', createUsuario);

export default routerUsuario;
