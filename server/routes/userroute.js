import express from "express"
import UserController from "../controllers/usercontroller.js";
import ServiceController from "../controllers/servicecontoller.js";

const route = express.Router();

// user login / signup 

route.post("/signup",UserController.signUp);
route.post("/login",UserController.login)

// services 

route.post("/addService",ServiceController.createService)
route.get("/getOneService/:id" , ServiceController.getOneService)
route.get("/getAllService" , ServiceController.getAllService)
route.delete("/deleteService/:id" , ServiceController.deleteService)
route.put("/updateService/:id" , ServiceController.updateService)




export default route