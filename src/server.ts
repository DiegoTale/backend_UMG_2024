import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { corsConfig } from "./config/cors";
import { MongoDB } from "./data/mongo-database";
import authRoutes from "./routes/authRoutes";
import consignmentsRoutes from "./routes/consignmentRoutes";
import banckAccountRoutes from "./routes/accountRoutes";
import transferTypeRoutes from "./routes/transferTypeRoutes";

dotenv.config();
MongoDB();

const app = express();
app.use(cors(corsConfig));

// Logging
app.use(morgan("dev"));

// Leer datos de formularios
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/consignments", consignmentsRoutes);
app.use("/api/accounts", banckAccountRoutes);
app.use("/api/type-transfer", transferTypeRoutes);

export default app;
