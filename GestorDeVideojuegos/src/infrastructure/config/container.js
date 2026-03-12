import MongoProductRepository from "../repositories/MongoProductRepository.js"
import CreateVideogame from "../../application/usecases/CreateVideogame.js";
import GetAllVideogames from "../../application/usecases/GetAllVideogames.js";
import VideogameController from "../controllers/VideogameController.js";

const repository = new MongoProductRepository();

const createVideogame = new CreateVideogame(repository);
const getAllVideogames = new GetAllVideogames(repository);

const videogameController = new VideogameController({
  createVideogame,
  getAllVideogames
});

export { videogameController };