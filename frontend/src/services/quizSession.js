export function startNewRun(playerName) {
  const runId = crypto.randomUUID();
  const name = String(playerName || "").trim();

  localStorage.setItem("runId", runId);
  localStorage.setItem("playerName", name);
  localStorage.setItem("scoreQuiz1", "0");
  localStorage.setItem("scoreQuiz2", "0");
  localStorage.setItem("playedDouble", "false");
  localStorage.setItem("doubleWon", "false");
  localStorage.setItem("abandonedRun", "false");

  return runId;
}

export function getRunId() {
  return localStorage.getItem("runId") || "";
}

export function getPlayerName() {
  return localStorage.getItem("playerName") || "";
}

export function getScoreQuiz1() {
  return Number(localStorage.getItem("scoreQuiz1") || 0);
}

export function getScoreQuiz2() {
  return Number(localStorage.getItem("scoreQuiz2") || 0);
}

export function setQuiz1Score(score) {
  localStorage.setItem("scoreQuiz1", String(score));
}

export function setQuiz2Score(score) {
  localStorage.setItem("scoreQuiz2", String(score));
}

export function getBaseScore() {
  return getScoreQuiz1() + getScoreQuiz2();
}

export function getPlayedDouble() {
  return localStorage.getItem("playedDouble") === "true";
}

export function setPlayedDouble(value) {
  localStorage.setItem("playedDouble", String(Boolean(value)));
}

export function getDoubleWon() {
  return localStorage.getItem("doubleWon") === "true";
}

export function setDoubleWon(value) {
  localStorage.setItem("doubleWon", String(Boolean(value)));
}

export function getAbandonedRun() {
  return localStorage.getItem("abandonedRun") === "true";
}

export function setAbandonedRun(value) {
  localStorage.setItem("abandonedRun", String(Boolean(value)));
}

export function abandonRun() {
  localStorage.setItem("scoreQuiz1", "0");
  localStorage.setItem("scoreQuiz2", "0");
  localStorage.setItem("playedDouble", "false");
  localStorage.setItem("doubleWon", "false");
  localStorage.setItem("abandonedRun", "true");
}

export function computeFinalScore() {
  const score1 = getScoreQuiz1();
  const score2 = getScoreQuiz2();
  const playedDouble = getPlayedDouble();
  const doubleWon = getDoubleWon();
  const abandonedRun = getAbandonedRun();

  if (abandonedRun) {
    return 0;
  }

  const base = score1 + score2;

  if (!playedDouble) {
    return base;
  }

  return doubleWon ? base * 2 : 0;
}
