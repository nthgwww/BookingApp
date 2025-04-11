import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB.")
    }catch(err){
        throw err;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

app.get("/users", (req, res) => {
    res.send("Hello from the API!");
})

// Middleware

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
    
app.listen(8080, () => {
    connect();
    console.log("Server is running on port 3000."); 
})