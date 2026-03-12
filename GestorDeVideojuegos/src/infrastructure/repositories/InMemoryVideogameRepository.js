import VideogameRepository from "../../domain/repositories/VideogameRepository.js";

export default class InMemoryVideogameRepository extends VideogameRepository {
    constructor(){
        super();
        this.videogames = [];
    }
    async save(videogame){
        const index = this.videogames.findIndex(p => p.id === videogame.id);
        if(index >= 0){
            this.videogames[index] = videogame;
        }else{
            this.videogames.push(videogame);
        }
        return videogame;
    }

    async findAll(){
        return this.videogames;
    }

}