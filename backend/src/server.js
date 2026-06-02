// import express from "express";
// import notesRoutes from "../src/routes/notesRoutes.js"
// import { connectDB } from "./config/db.js";
// import dotenv from "dotenv";
// import rateLimiter from "./middleware/rateLimiter.js";
// import cors from "cors";
// import path from "path";
// dotenv.config();
// // console.log(process.env.MONGO_URI)


// const app = express();
// const PORT = process.env.PORT || 5001
// const __dirname = path.resolve();

// //middleware
// if (process.env.NODE_ENV !== "production") {
//     app.use(cors({
//     origin: [
//         "http://localhost:5173",
//         "https://mern-thinkboard-lilac.vercel.app"
//     ],
//     credentials: true
// }));
// }
// app.use(express.json()); //this middleware will parse JSON bodies : req.body
// app.use(rateLimiter);
// app.use("/api/notes", notesRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")))

//     // app.get("*", (req, res) => {
//     //     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     // })
//     app.use((req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
//     });
// }
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("Server Started on PORT", PORT)
//     })
// });


import express from "express";
import notesRoutes from "../src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://mern-thinkboard-lilac.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server Started on PORT", PORT);
    });
});