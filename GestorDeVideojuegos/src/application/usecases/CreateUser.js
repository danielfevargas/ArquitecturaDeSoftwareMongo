import User from "../../domain/entites/User.js";

export default class CreateUser{
    constructor(UserRepository){
        this.UserRepository = UserRepository;
    }
    async execute({name, age}){
        const user = new User({ name, age });
        return await this.UserRepository.save(user);
    }
}

