import mongoose from "mongoose";

const ComunidadSchema = new mongoose.Schema({
    comunidad_ID:{type:String, require: true},
    nombre_comunidad:{type:String, require: true},
    descripcion:{type:String},
    administrador:{type:String, require: true},
    participantes:{type:[String]},
    fecha_creacion:{type:String, require: true},
    publicaciones_relacionadas:{type:[String]}
});

const ComunidadModel = mongoose.model("Comunidad",ComunidadSchema);
//Inserta Primera vez
/*
ComunidadModel.insertMany([
    {
      comunidad_ID: "1",
      nombre_comunidad: "Comunidad de Viajes",
      descripcion: "Comunidad para amantes de los viajes",
      administrador: "usuario1",
      participantes: ["usuario1", "usuario2", "usuario3"],
      fecha_creacion: "2024-05-06",
      publicaciones_relacionadas: ["publicacion1", "publicacion2"]
    },
    {
      comunidad_ID: "2",
      nombre_comunidad: "Comunidad de Programación",
      descripcion: "Comunidad para programadores",
      administrador: "usuario2",
      participantes: ["usuario2", "usuario3", "usuario4"],
      fecha_creacion: "2024-04-15",
      publicaciones_relacionadas: ["publicacion3", "publicacion4"]
    },
    {
      comunidad_ID: "3",
      nombre_comunidad: "Comunidad de Cocina",
      descripcion: "Comunidad para amantes de la cocina",
      administrador: "usuario3",
      participantes: ["usuario3", "usuario4", "usuario5"],
      fecha_creacion: "2024-03-28",
      publicaciones_relacionadas: ["publicacion5", "publicacion6"]
    },
    {
      comunidad_ID: "4",
      nombre_comunidad: "Comunidad de Deportes",
      descripcion: "Comunidad para amantes del deporte",
      administrador: "usuario4",
      participantes: ["usuario4", "usuario5", "usuario6"],
      fecha_creacion: "2024-02-10",
      publicaciones_relacionadas: ["publicacion7", "publicacion8"]
    },
    {
      comunidad_ID: "5",
      nombre_comunidad: "Comunidad de Música",
      descripcion: "Comunidad para amantes de la música",
      administrador: "usuario5",
      participantes: ["usuario5", "usuario6", "usuario7"],
      fecha_creacion: "2024-01-21",
      publicaciones_relacionadas: ["publicacion9", "publicacion10"]
    }
  ]);
  */
export default ComunidadModel;