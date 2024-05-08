import express from "express";
import PublicacionModel from "../daos/publicacion_daos.js";
const router = express.Router();

router.get("/publicaciones", async (request, response) => {
    try {
        const publicaciones = await PublicacionModel.find({});
        response.send(publicaciones);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/publicacions/:id", async (request, response) => {
    try{
        let publicacion = await PublicacionModel.findOne({ _id: request.params.id });
        if(!publicacion){
            publicacion = new PublicacionModel(request.body);
            try {
                await publicacion.save();
                response.send(publicacion);
            } catch (error) {
                response.status(500).send(error);
            }
        }else{
            response.send(usuario);
        }
    }catch(error){
        response.status(500).send({error});
    }
});

router.put("/publicacions/:id", async (request, response) => {
   try{
        let publicacion = await PublicacionModel.findOne({ _id: request.params.id });
    
        if(!publicacion){
            response.send("La publicacion no existe");
        }else{
            response.send(usuario);
    }
   }catch(error){
        response.status(500).send({error});
    }
});

router.get("/publicacions/:id", async (request, response) => {
    try {
        const publicacion = await PublicacionModel.findOne({ _id: request.params.id });
        response.send(publicacion);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;