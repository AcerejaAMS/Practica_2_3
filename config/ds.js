import mongoose from "mongoose";

export default class DB{
    static async connectDB(DB_URI){
        try{
            await mongoose.connect(DB_URI);
        } catch (err) {
            console.error(err.message);
            process.exit(1);
        }
        const dbConnection = mongoose.connection;
        dbConnection.once("open", (_) => {
            console.log(`Coneccion Base de Datos: ${DB_URI}`);
        }); 

        dbConnection.on("error", (err) => {
            console.error(`Error en Conexion: ${err}`);
        });
        return;
    }
}
