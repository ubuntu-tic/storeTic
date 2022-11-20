import mongoose from 'mongoose';
import { uri } from '../backend/config.js';

export async function bd_conect() {
    try {
        const bd = await mongoose.connect(uri);
        console.log('Base de datos ' + bd.connection.name + ' conectada');
    } catch (error) {
        console.log(error);
    }
}

export default bd_conect;