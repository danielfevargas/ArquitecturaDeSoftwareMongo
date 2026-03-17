import UserRepository from "../../domain/repositories/UserRepository.js";

export default class InMemoryUserRepository extends UserRepository {
    constructor(){
        super();
        this.users = [];
    }
    async save(user){
        const index = this.users.findIndex(p => p.id === user.id);
        if(index >= 0){
            this.users[index] = user;
        }else{
            this.users.push(user);
        }
        return user;
    }
    async findAll(){
        return this.users;
    }
}