import mongoose from "mongoose";

const ConversacionSchema = new mongoose.Schema({
    conversacion_ID:{type:String, require: true},
    lista_mensaje:{type:String},
    archivos_compartidos:{type:String},
    participantes:{type:[String], require: true}
});

const ConversacionModel = mongoose.model("Conversacion",ConversacionSchema);

//Incertar primera vez
/*
ConversacionModel.insertMany([
    {
      conversacion_ID: "1",
      lista_mensaje: "¡Hola! ¿Cómo estás?",
      archivos_compartidos: "imagen1.png, documento1.pdf",
      participantes: ["usuario1", "usuario2"]
    },
    {
      conversacion_ID: "2",
      lista_mensaje: "¿Vamos a almorzar hoy?",
      archivos_compartidos: "",
      participantes: ["usuario2", "usuario3"]
    },
    {
      conversacion_ID: "3",
      lista_mensaje: "¡Feliz cumpleaños!",
      archivos_compartidos: "video1.mp4",
      participantes: ["usuario3", "usuario4", "usuario5"]
    },
    {
      conversacion_ID: "4",
      lista_mensaje: "¿Qué tal si organizamos una reunión?",
      archivos_compartidos: "documento2.pdf",
      participantes: ["usuario1", "usuario4", "usuario6"]
    },
    {
      conversacion_ID: "5",
      lista_mensaje: "¡Qué bueno verte de nuevo!",
      archivos_compartidos: "",
      participantes: ["usuario2", "usuario5", "usuario7"]
    }
  ]);
*/
export default ConversacionModel;