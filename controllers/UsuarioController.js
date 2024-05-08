import express from "express";
import UsuarioModel from "../daos/usuario_daos.js";
const router = express.Router();

router.get("/usuarios", async (request, response) => {
    try {
        const usuarios = await UsuarioModel.find({});
        response.send(usuarios);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/usuarios", async (request, response) => {
    const usuario = new UsuarioModel(request.body);

    try {
        await usuario.save();
        response.send(usuario);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.put("/usuarios", async (request, response) => {
    const usuario = new UsuarioModel(request.body);

    try {
        await usuario.save();
        response.send(usuario);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/usuarios/:id", async (request, response) => {
    try {
        const usuario = await UsuarioModel.findOne({ _id: request.params.id });
        response.send(usuario);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;