import express from "express";
import videogameRoutes from "./infrastructure/routes/videogameRoutes.js";
import { videogameController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use('/api', videogameRoutes(videogameController));

export default app;