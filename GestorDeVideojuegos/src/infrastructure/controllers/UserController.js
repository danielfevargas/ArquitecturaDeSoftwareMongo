export default class UserController {
    constructor({ createUser, getAllUsers }) {
        this.createUser = createUser;
        this.getAllUsers = getAllUsers;
    }
    async create(req, res){
        try {
            const user = await this.createUser.execute(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({error: err.message});
        }
    }
    async getAll(req, res){
        try {
            const users = await this.getAllUsers.execute();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
}