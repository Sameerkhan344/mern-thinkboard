import express from "express";
import notesRoutes from "../src/routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
const app = express();
dotenv.config();
// console.log(process.env.MONGO_URI)




//middleware
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json()); //this middleware will parse JSON bodies : req.body
app.use(rateLimiter);
app.use("/api/notes", notesRoutes)

const PORT = process.env.PORT || 5001

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server Started on PORT", PORT)
    })
});

