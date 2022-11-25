import dotenv from 'dotenv'; //import dotenv para usar la variable de entorno .env
dotenv.config( {} ); //importamos el archivo .env

export const port = process.env.port || 3000; //definimos el puerto
export const uri = process.env.uri || "localhost:3000"; //definimos la url de la base de datos


