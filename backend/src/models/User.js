import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    displayName: { type: String, required: true, trim: true },
    role: { type: String, default: "user" },
    verified: { type: Boolean, default: false },
    verificationToken: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
