import express from "express";
import ComunidadModel from "../daos/comunidad_daos.js";
const router = express.Router();

router.get("/comunidades", async (request, response) => {
    try {
        const comunidades = await ComunidadModel.find({});
        response.send(comunidades);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/comunidades/:id", async (request, response) => {
    try{
        let comunidad = await ComunidadModel.findOne({ _id: request.params.id });
        if(comunidad==null){
            comunidad = new ComunidadModel(request.body);

            try {
                await comunidad.save();
                response.send(comunidad);
            } catch (error) {
                response.status(500).send({error});
            }
        }else{
            response.send(comunidad)
        }
    }catch(error){
        response.status(500).send({error});
    }
});

router.put("/comunidades/:id", async (request, response) => {
    try{
        let comunidad = await ComunidadModel.findOne({ _id: request.params.id });
        if(comunidad==null){
            response.send("La comunidad no existe")
        }else{
            response.send(comunidad)
        }
    }catch(error){
        response.status(500).send({error});
    }
});

router.get("/comunidades/:id", async (request, response) => {
    try {
        let comunidad = await ComunidadModel.findOne({ _id: request.params.id });
        response.send(comunidad);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;