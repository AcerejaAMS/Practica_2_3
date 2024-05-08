import express from "express";
import dotenv from 'dotenv';
import DB from "./config/ds.js";
import UsuarioRouter from "./controllers/UsuarioController.js";
import PublicacionRouter from "./controllers/PublicacionController.js";
import ConversacionRouter from "./controllers/ConversacionController.js";
import ComunidadRouter from "./controllers/ComunidadController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", UsuarioRouter);
app.use("/api", PublicacionRouter);
app.use("/api", ConversacionRouter);
app.use("/api", ComunidadRouter);

DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api`);
});