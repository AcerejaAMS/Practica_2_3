import express from "express";
import ConversacionModel from "../daos/conversacion_daos.js";
const router = express.Router();

router.get("/conversaciones", async (request, response) => {
    try {
        const conversaciones = await ConversacionModel.find({});
        response.send(conversaciones);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/conversaciones/:id", async (request, response) => {
    try{
        let conversacion = await ConversacionModel.findOne({ _id: request.params.id });
        if(!conversacion){
            conversacion = new ConversacionModel(request.body);
            try {
                await conversacion.save();
                response.send(conversacion);
            } catch (error) {
                response.status(500).send({error});
            }
    }else{
        response.send(conversacion);
    }
    }catch(error){
        response.status(500).send({error});
    }
});

router.put("/conversaciones/:id", async (request, response) => {
    try{
        let conversacion = await ConversacionModel.findOne({ _id: request.params.id });
        if(!conversacion){
            response.send("La conversacion no existe")
        }else{
            response.send(conversacion);
    }
    }catch(error){
        response.status(500).send({error});
    }
});

router.get("/conversaciones/:id", async (request, response) => {
    try {
        const conversacion = await ConversacionModel.findOne({ _id: request.params.id });
        response.send(conversacion);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;