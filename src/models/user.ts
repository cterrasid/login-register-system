import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

// Create user schema
const userSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Encrypt the password: When a new user is saved, the password is encrypted
userSchema.pre<IUser>("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};


export default model<IUser>("User", userSchema);
