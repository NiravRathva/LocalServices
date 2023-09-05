import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name!"],
    },
    mobileNo: {
      type: Number,
      required: [true, "Please tell us your number!"],
      unique: true,
      min: 1000000000,
      max: 9999999999,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide your email"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

//Creating Password Hash
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
//Comparing user entered password and password saved in db
UserSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
export default mongoose.model("User", UserSchema);
