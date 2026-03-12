import {Router} from "express";

export default function videogameRoutes(controller) {
    const router = Router();

    router.post('/videogames', (req, res) => controller.create(req,res));

    router.get('/videogames', (req, res) => controller.getAll(req,res));

    return router;

}
