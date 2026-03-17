import {Router} from "express";

export default function userRoutes(controller) {
    const router = Router();

    router.post('/users', (req, res) => controller.create(req,res));

    router.get('/users', (req, res) => controller.getAll(req,res));

    return router;

}
