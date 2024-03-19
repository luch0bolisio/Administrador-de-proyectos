import mongoose from "mongoose"
import {exit} from "node:process"


export const conectarDB = async () => {
    try {
        const conectar = await mongoose.connect(`mongodb://localhost:27017/${process.env.MONGODBNAME}`);
        console.log(`La base de datos está conectada en el puerto ${conectar.connection.port}`);
    } catch (error) {
        console.log(error);
        exit(1);
    }
};