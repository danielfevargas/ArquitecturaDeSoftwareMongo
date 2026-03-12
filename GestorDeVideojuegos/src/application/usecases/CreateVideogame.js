import Videogame from "../../domain/entites/Videogame.js";

export default class CreateVideogame {
    constructor(VideogameRepository) {
        this.VideogameRepository = VideogameRepository;
    }
    async execute({ name, price }) {
        const videogame = new Videogame({ name, price });
        return await this.VideogameRepository.save(videogame);
    }
}