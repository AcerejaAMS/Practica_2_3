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

router.post("/comunidades", async (request, response) => {
    const comunidad = new ComunidadModel(request.body);

    try {
        await comunidad.save();
        response.send(comunidad);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.put("/comunidades", async (request, response) => {
    const comunidad = new ComunidadModel(request.body);

    try {
        await comunidad.save();
        response.send(comunidad);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/comunidades/:id", async (request, response) => {
    try {
        const comunidad = await ComunidadModel.findOne({ _id: request.params.id });
        response.send(comunidad);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;