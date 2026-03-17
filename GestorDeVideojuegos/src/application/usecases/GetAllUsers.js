export default class GetAllUsers {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async execute() {
        return await this.UserRepository.findAll();
    }

}