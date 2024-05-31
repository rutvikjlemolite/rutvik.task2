import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    mobile: {
      type: String,
      require: true,
      unique: true,
    },
    
    email: {
      type: String,
      require: true,
      unique: true,
    },

    role: {
      type: String,
      require: true,
      default:"user"
    },

    address: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
