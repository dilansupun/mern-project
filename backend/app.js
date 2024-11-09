import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnections.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

// CORS configuration
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],  // Corrected "method" to "methods"
        credentials: true,  // Corrected "Credential" to "credentials"
    })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Database connection
try {
    dbconnection();
    console.log("Database connected successfully.");
} catch (error) {
    console.error("Database connection error:", error);
}

// Error handling middleware
app.use(errorMiddleware);

export default app;
