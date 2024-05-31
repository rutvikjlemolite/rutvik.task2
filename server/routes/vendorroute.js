import express from "express"
import VendorController from "../controllers/vendorcontroller.js";


const vroute = express.Router();


vroute.post("/vendorSignup",VendorController.vendorSignup);
vroute.get("/getVendors",VendorController.getVendors);


export default vroute