import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import route from "./routes/user.route.js";
import companyroute from "./routes/company.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", route);
app.use("/api/v1/company", companyroute);

connectdb();

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
