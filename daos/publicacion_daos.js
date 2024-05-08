import mongoose from "mongoose";

const PublicacionSchema = new mongoose.Schema({
    publicacion_ID:{type:String, require: true},
    tipo:{type:String, require: true},
    autor:{type:String, require: true},
    fecha_subida:{type:Date, require: true},
    comunidad_de_subida:{type:String, require: true},
    informacion:{type:String},
    publicaciones_relacionadas:{type:[String]},
    privacidad:{type:String},
    me_gusta:{type:Number},
    veces_compartido:{type:Number}
});

const PublicacionModel = mongoose.model("Publicacion",PublicacionSchema);


//Insertar primera vez
/*
PublicacionModel.insertMany([
    {
      publicacion_ID: "1",
      tipo: "texto",
      autor: "usuario1",
      fecha_subida: new Date(),
      comunidad_de_subida: "Comunidad de Viajes",
      informacion: "¡Acabo de regresar de un increíble viaje por Europa!",
      publicaciones_relacionadas: ["publicacion2"],
      privacidad: "pública",
      me_gusta: 10,
      veces_compartido: 5
    },
    {
      publicacion_ID: "2",
      tipo: "imagen",
      autor: "usuario2",
      fecha_subida: new Date(),
      comunidad_de_subida: "Comunidad de Programación",
      informacion: "Imagen de mi nuevo proyecto de programación.",
      publicaciones_relacionadas: ["publicacion1", "publicacion3"],
      privacidad: "privada",
      me_gusta: 15,
      veces_compartido: 3
    },
    {
      publicacion_ID: "3",
      tipo: "texto",
      autor: "usuario3",
      fecha_subida: new Date(),
      comunidad_de_subida: "Comunidad de Cocina",
      informacion: "¡Acabo de hacer una deliciosa receta de pasta!",
      publicaciones_relacionadas: ["publicacion2"],
      privacidad: "pública",
      me_gusta: 20,
      veces_compartido: 2
    },
    {
      publicacion_ID: "4",
      tipo: "video",
      autor: "usuario4",
      fecha_subida: new Date(),
      comunidad_de_subida: "Comunidad de Deportes",
      informacion: "Video de mi último partido de fútbol.",
      publicaciones_relacionadas: [],
      privacidad: "pública",
      me_gusta: 25,
      veces_compartido: 7
    },
    {
      publicacion_ID: "5",
      tipo: "texto",
      autor: "usuario5",
      fecha_subida: new Date(),
      comunidad_de_subida: "Comunidad de Música",
      informacion: "¡Escuché una increíble banda nueva hoy!",
      publicaciones_relacionadas: [],
      privacidad: "pública",
      me_gusta: 30,
      veces_compartido: 4
    }
  ]);
*/
export default PublicacionModel;