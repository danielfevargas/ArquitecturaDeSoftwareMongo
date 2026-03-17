import UserRepository from "../../domain/repositories/UserRepository.js";
import UserModel from "../database/models/UserModel.js";


export default class MongoUserRepository extends UserRepository {
  async save(user) {
    await UserModel.findOneAndUpdate(
      { name: user.name },
      user,
      { upsert: true, new: true }
    );
    return user;
  }

  async findAll() {
    return await UserModel.find();
  }

  async findByName(name) {
    return await UserModel.findOne({ name }) ?? null;
  }

  async delete(name) {
    const result = await UserModel.findOneAndDelete({ name });
    if (!result) throw new Error(`user with name "${name}" not found`);
  }
}