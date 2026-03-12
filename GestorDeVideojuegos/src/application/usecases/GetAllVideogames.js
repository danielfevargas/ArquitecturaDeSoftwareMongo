export default class GetAllVideoGames {
    constructor(VideogameRepository) {
        this.VideogameRepository = VideogameRepository;
    }
    async execute() {
        return await this.VideogameRepository.findAll();
    }

}