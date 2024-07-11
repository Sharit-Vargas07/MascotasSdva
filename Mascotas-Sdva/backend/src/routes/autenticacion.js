import { Router } from "express";
import { validar } from "../controllers/validacion.js";

const routerValidar =Router()

routerValidar.post('/validar',validar)

export default routerValidar