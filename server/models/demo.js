import mongoose, { Schema } from "mongoose";

const demoSchema = new Schema(
  {
    vendorname: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
    },

    mobile: {
      type: String,
      require: true,
    },

    address: {
      type: String,
      require: true,
    },

    category: {
      type: String,
      require: true,
    },

    experience: {
      type: String,
      require: true,
    },

    service: {
        type:String,
        require:true,
    }
  },
  { timestamps: true }
);

const Demo = mongoose.model("demo", demoSchema);

export default Demo;
