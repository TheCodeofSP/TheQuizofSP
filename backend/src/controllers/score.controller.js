import { connectDB } from "../config/db.js";
import { saveScore, getLeaderboard } from "../services/score.service.js";

export async function createScore(req, res) {
  try {
    await connectDB();

    const data = await saveScore(req.body);

    return res.status(201).json({
      message: "Score enregistré",
      data,
    });
  } catch (error) {
    console.error("createScore error:", error);

    return res.status(error.statusCode || 500).json({
      message: error.message || "Erreur serveur.",
    });
  }
}

export async function fetchScores(req, res) {
  try {
    await connectDB();

    const scores = await getLeaderboard(req.query.limit);

    return res.status(200).json(scores);
  } catch (error) {
    console.error("fetchScores error:", error);

    return res.status(error.statusCode || 500).json({
      message: error.message || "Erreur serveur.",
    });
  }
}
