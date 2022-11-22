import  Express  from "express";
import productoRouter from "./Server/routes/products.routes.js";
import ventaRouter from "./Server/routes/ventas.routes.js";
import usuarioRouter from "./Server/routes/usuarios.routes.js";
import cors from "cors";
import morgan from "morgan";
;




const app = Express();
app.use(cors());
app.use(morgan("dev"));
app.use(Express.json());

//rutas
app.use("/productos", productoRouter);
app.use("/ventas", ventaRouter)
app.use("/usuarios", usuarioRouter)
app.use("/agregar", productoRouter);






export default app;