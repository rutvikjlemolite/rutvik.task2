import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    category: {
      type: String,
      require: true,
    },

    serviceName: {
      type: String,
      require: true,
    },

    priceOne: {
      type: String,
      require: true,
    },

    descOne: {
      type: String,
      require: true,
    },

    priceTwo: {
      type: String,
      require: true,
    },

    descTwo: {
      type: String,
      require: true,
    },

    priceThree: {
      type: String,
      require: true,
    },
    
    descThree: {
      type: String,
      require: true,
    },

    desc: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
