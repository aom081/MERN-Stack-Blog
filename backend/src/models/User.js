import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 6},
}
);

const User = model("User", userSchema);
export default User;