import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    usuario_ID:{type:String, require: true},
    nnombre:{type:String, require: true},
    apellido:{type:String, require: true},
    correo:{type:String, require: true},
    contrasenia:{type:String, require: true},
    plantel:{type:String},
    carrera:{type:String},
    sexo:{type:String},
    fecha_nacimiento:{type:Date},
    fecha_registro:{type:Date, require: true},
    lista_amigos:{type: [String]},
    lista_comunidades:{type: [String]},
    lista_publicaciones:{type: [String]}
});

const UsuarioModel = mongoose.model("Usuario",UsuarioSchema);

//Insertar primera vez
/*
UsuarioModel.insertMany([
    {
      usuario_ID: "1",
      nombre: "Juan",
      apellido: "Pérez",
      correo: "juan@example.com",
      contrasenia: "contraseña123",
      plantel: "Plantel A",
      carrera: "Ingeniería en Informática",
      sexo: "Masculino",
      fecha_nacimiento: new Date("1990-05-15"),
      fecha_registro: new Date(),
      lista_amigos: ["usuario2", "usuario3"],
      lista_comunidades: ["Comunidad de Viajes", "Comunidad de Música"],
      lista_publicaciones: ["publicacion1", "publicacion2"]
    },
    {
      usuario_ID: "2",
      nombre: "María",
      apellido: "Gómez",
      correo: "maria@example.com",
      contrasenia: "contraseña456",
      plantel: "Plantel B",
      carrera: "Licenciatura en Biología",
      sexo: "Femenino",
      fecha_nacimiento: new Date("1992-08-25"),
      fecha_registro: new Date(),
      lista_amigos: ["usuario1", "usuario3"],
      lista_comunidades: ["Comunidad de Programación", "Comunidad de Deportes"],
      lista_publicaciones: ["publicacion3"]
    },
    {
      usuario_ID: "3",
      nombre: "Carlos",
      apellido: "López",
      correo: "carlos@example.com",
      contrasenia: "contraseña789",
      plantel: "Plantel C",
      carrera: "Ingeniería Civil",
      sexo: "Masculino",
      fecha_nacimiento: new Date("1988-12-10"),
      fecha_registro: new Date(),
      lista_amigos: ["usuario1", "usuario2"],
      lista_comunidades: ["Comunidad de Cocina", "Comunidad de Música"],
      lista_publicaciones: ["publicacion2", "publicacion4"]
    },
    {
      usuario_ID: "4",
      nombre: "Ana",
      apellido: "Martínez",
      correo: "ana@example.com",
      contrasenia: "contraseñaabc",
      plantel: "Plantel A",
      carrera: "Licenciatura en Psicología",
      sexo: "Femenino",
      fecha_nacimiento: new Date("1991-04-20"),
      fecha_registro: new Date(),
      lista_amigos: ["usuario5"],
      lista_comunidades: ["Comunidad de Deportes"],
      lista_publicaciones: ["publicacion5"]
    },
    {
      usuario_ID: "5",
      nombre: "David",
      apellido: "Hernández",
      correo: "david@example.com",
      contrasenia: "contraseñaxyz",
      plantel: "Plantel B",
      carrera: "Ingeniería en Sistemas",
      sexo: "Masculino",
      fecha_nacimiento: new Date("1993-09-30"),
      fecha_registro: new Date(),
      lista_amigos: ["usuario4"],
      lista_comunidades: ["Comunidad de Música"],
      lista_publicaciones: []
    }
  ]);
*/
export default UsuarioModel;