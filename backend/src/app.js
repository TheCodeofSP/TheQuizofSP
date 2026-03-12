import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import scoreRoutes from "./routes/score.routes.js";

const app = express();

app.use((req, res, next) => {
  console.log("REQ >", req.method, req.url);
  next();
});

app.use(
  cors({
    origin: [process.env.CLIENT_URL || "http://localhost:5173"],
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/api-docs.json", (req, res) => {
  res.json(swaggerSpec);
});

app.use("/api/scores", scoreRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/", (req, res) => {
  res.status(200).json({
    name: "Quiz API",
    version: "1.0.0",
  });
});

export default app;