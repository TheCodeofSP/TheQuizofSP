import { Navigate, Route, Routes } from "react-router-dom";

import StartPage from "./pages/StartPage.jsx";
import Quiz1Page from "./pages/Quiz1Page.jsx";
import Quiz2Page from "./pages/Quiz2Page.jsx";
import Quiz3Page from "./pages/Quiz3Page.jsx";
import NextLevelPage from "./pages/NextLevelPage.jsx";
import DoublePage from "./pages/DoublePage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import LoadingPage from "./pages/LoadingPage.jsx";

import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz-1" element={<Quiz1Page />} />
          <Route path="/next-level" element={<NextLevelPage />} />
          <Route path="/quiz-2" element={<Quiz2Page />} />
          <Route path="/double" element={<DoublePage />} />
          <Route path="/quiz-3" element={<Quiz3Page />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
