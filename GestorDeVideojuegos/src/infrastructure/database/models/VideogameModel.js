import { Schema, model } from "mongoose";

const videogameSchema = new Schema({
  name:   { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

export default model("Videogame", videogameSchema);