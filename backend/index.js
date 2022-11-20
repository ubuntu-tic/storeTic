import bd_conect from "../backend/db.js";//recibe la funcion de la base de datos
import { port } from "./config.js";//recibe el puerto de la base de datos
import app from "./app.js";


bd_conect(); //invocamos la funcion de conexion a la base de datos


app.listen(port, () => {
    //escucha el puerto de ejecucion del servicio de la app
    console.log(`Server on port ${port}`);
});

