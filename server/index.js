import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import route from "./routes/userroute.js"
import vroute from "./routes/vendorroute.js"

const app = express();

dotenv.config();
app.use(express.json())
app.use(cors()) // Enable CORS

const port = process.env.PORT;
const url = process.env.URL;

mongoose.connect(url).then( () => {
    console.log("Database connected successfully !!")
    app.listen( port ,() => {
        console.log(`app is listening on port:${port}`);
    })
}).catch((error) => {
    console.log("Error:" , error)
})

app.use("/api",route)
app.use("/api/vendor" , vroute)