const API_URL = import.meta.env.VITE_API_URL;

export async function postScore(payload) {
  const res = await fetch(`${API_URL}/api/scores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Erreur API (${res.status})`);
  }

  return res.json();
}

export async function getScores(limit = 20) {
  const res = await fetch(`${API_URL}/api/scores?limit=${limit}`);
  if (!res.ok) throw new Error(`Erreur API (${res.status})`);
  return res.json();
}