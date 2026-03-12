import VideogameRepository from "../../domain/repositories/VideogameRepository.js";
import VideogameModel from "../database/models/VideogameModel.js";

export default class MongoVideogameRepository extends VideogameRepository {
  async save(videogame) {
    await VideogameModel.findOneAndUpdate(
      { name: videogame.name },
      videogame,
      { upsert: true, new: true }
    );
    return videogame;
  }

  async findAll() {
    return await VideogameModel.find();
  }

  async findBySku(name) {
    return await VideogameModel.findOne({ name }) ?? null;
  }

  async delete(name) {
    const result = await VideogameModel.findOneAndDelete({ name });
    if (!result) throw new Error(`<Entidad> with id "${name}" not found`);
  }
}