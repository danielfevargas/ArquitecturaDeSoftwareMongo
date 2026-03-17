import express from "express";
import videogameRoutes from "./infrastructure/routes/videogameRoutes.js";
import { videogameController } from "./infrastructure/config/container.js";

import userRoutes from "./infrastructure/routes/userRoutes.js";
import { userController} from "./infrastructure/config/container.js"


const app = express();
app.use(express.json());

app.use('/api', videogameRoutes(videogameController));
app.use('/api', userRoutes(userController));

export default app;