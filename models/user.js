import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please enter a name"],
   },
   email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Email already exists"],
   },
   password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password must be at least 6 characters"],
      // select: false,
   },
});

userSchema.methods.generateToken = function () {
   return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);
export default User;