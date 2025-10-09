import express from 'express';
import cors from 'cors';    
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectdb from "./config/db.js";
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

app.use("/hello", (req , res)=>{
     
     res.send("server is succesfully ")
})

app.listen(PORT, () => {
    connectdb();
    console.log(`Server is running on port ${PORT}`);
});
