import express from "express";
import cors from "cors";
import helmet from "helmet";
import { assessmentRouter } from "./routes/assessment";
import { productsRouter } from "./routes/products";
import { healthRouter } from "./routes/health";

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:3000" }));
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/assessment", assessmentRouter);
app.use("/api/products", productsRouter);

export default app;
