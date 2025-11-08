import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import route from "./routes/user.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const coreoption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(coreoption));

const PORT = process.env.PORT || 3000;

app.use("/",route)

app.listen(PORT, () => {
  connectdb();
  console.log(`Server is running on port ${PORT}`);
});
