export default class VideogameController {
    constructor({ createVideogame, getAllVideogames }) {
        this.createVideogame = createVideogame;
        this.getAllVideogames = getAllVideogames;
    }
    async create(req, res) {
        try {
            const videogame = await this.createVideogame.execute(req.body);
            res.status(201).json(videogame);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async getAll(req, res) {
        try {
            const videogames = await this.getAllVideogames.execute();
            res.status(200).json(videogames);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}