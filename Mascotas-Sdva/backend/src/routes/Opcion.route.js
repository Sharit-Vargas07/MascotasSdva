import { Router } from "express";
import { listarCategorias, listarGenero, listarRazas, listarUsuarios } from "../controllers/Opcion.controller.js";

const rutaOpcion = Router()

rutaOpcion.get('/categorias', listarCategorias)
rutaOpcion.get('/generos', listarGenero)
rutaOpcion.get('/razas', listarRazas)
rutaOpcion.get('/usuarios', listarUsuarios)

export default rutaOpcion