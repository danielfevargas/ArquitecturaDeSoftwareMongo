import MongoProductRepository from "../repositories/MongoProductRepository.js"
import CreateVideogame from "../../application/usecases/CreateVideogame.js";
import GetAllVideogames from "../../application/usecases/GetAllVideogames.js";
import VideogameController from "../controllers/VideogameController.js";

import MongoUserRepository from "../repositories/MongoUserRepository.js"
import UserController from "../controllers/UserController.js";
import CreateUser from "../../application/usecases/CreateUser.js"
import GetAllUsers from "../../application/usecases/GetAllUsers.js";

const repository = new MongoProductRepository();
const repository1 = new MongoUserRepository();

const createVideogame = new CreateVideogame(repository);
const getAllVideogames = new GetAllVideogames(repository);

const createUser = new CreateUser(repository1);
const getAllUsers = new GetAllUsers(repository1);

const videogameController = new VideogameController({
  createVideogame,
  getAllVideogames
});

const userController = new UserController({
  createUser,
  getAllUsers
});


export { videogameController };
export { userController }