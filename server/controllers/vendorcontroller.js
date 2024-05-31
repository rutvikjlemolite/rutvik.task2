// import bcrypt from "bcrypt";
import Demo from "../models/demo.js";

class VendorController {
  static vendorSignup = async (req, res, next) => {
    try {
      const {
        vendorname,
        email,
        mobile,
        category,
        experience,
        address,
        service,
      } = req.body;
      if (
        vendorname &&
        email &&
        mobile &&
        category &&
        experience &&
        address &&
        service
      ) {
        const user = await Demo.findOne({ email });

        if (user) {
          const user2 = await Demo.findOne({ service });

          if (user2) {
            return res.json({
              msg: "you are already register for this service",
              status: false,
            });
          } else {
            const vendor = await Demo.create({
              vendorname,
              email,
              mobile,
              category,
              experience,
              address,
              service,
            });

            return res.json({
              msg: "vendor created successfully",
              status: true,
              vendor,
            });
          }
        } else {
          const vendor = await Demo.create({
            vendorname,
            email,
            mobile,
            category,
            experience,
            address,
            service,
          });

          return res.json({
            msg: "vendor created successfully",
            status: true,
            vendor,
          });
        }
      } else {
        return res.json({ msg: "Please fill all the field", status: false });
      }
    } catch (error) {
      console.log("Errorr :>", error);
    }
  };


  static getVendors = async (req,res , next) => {

    try {
      const vendor = await Demo.find();
      if (!vendor) {
        return res.json({ msg: "vendors not found", status: false });
      }
  
      res.status(200).json(vendor);

    } catch (error) {
       next(error)
    }
  }



}

export default VendorController;
