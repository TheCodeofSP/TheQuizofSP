import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Quiz API",
    version: "1.0.0",
    description:
      "API pour enregistrer et afficher le leaderboard du Quiz Portfolio",
  },
  servers: [
    {
      url: process.env.BASE_URL || "http://localhost:5050",
      description: "API",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);