import dotenv from 'dotenv'; //import dotenv para usar la variable de entorno .env
dotenv.config( {} ); //importamos el archivo .env

export const port = process.env.port || 3000; //definimos el puerto
export const uri = process.env.uri || "mongodb+srv://jlemus89:Mateo051217@cluster0.cqbyalp.mongodb.net/storeTic?retryWrites=true&w=majority"; //definimos la url de la base de datos

