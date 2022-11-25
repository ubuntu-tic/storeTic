import { Router } from "express";
import {
    obtener_usuario,
    todos_usuarios,
} from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.get("/" , todos_usuarios);
usuarioRouter.get("/:_id", obtener_usuario);

export default usuarioRouter;
