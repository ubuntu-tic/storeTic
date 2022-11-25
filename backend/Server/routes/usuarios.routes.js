import { Router } from "express";
import {
    AddUsuario,
    obtener_usuario,
    todos_usuarios,
} from "../controllers/usuarios.controllers.js";

const usuarioRouter = Router();

usuarioRouter.get("/" , todos_usuarios);
usuarioRouter.get("/:_id", obtener_usuario);
usuarioRouter.post("/", AddUsuario)
export default usuarioRouter;
