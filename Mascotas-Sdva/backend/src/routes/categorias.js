import { Router } from "express";
import {  crearCategoria, listarCategoria } from "../controllers/categoria.js";

const routerCategoria = Router()

routerCategoria.post('/crearCategoria',crearCategoria)
routerCategoria.get('/listarCategoria',listarCategoria)

export default routerCategoria