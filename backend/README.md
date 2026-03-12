# Quiz API

Backend de l'application **The Quiz of SP**.

Cette API permet d'enregistrer et récupérer les scores du leaderboard.

---

# Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- Swagger

---

# Installation

npm install

---

# Variables d'environnement

Créer un fichier `.env`

MONGO_URI=ta_connection_mongodb
PORT=5050
BASE_URL=http://localhost:5050

---

# Lancer le serveur

npm run dev

API disponible sur

http://localhost:5050

---

# Documentation API

Swagger disponible sur

http://localhost:5050/api-docs

---

# Routes principales

Enregistrer un score

POST /api/scores

Récupérer le leaderboard

GET /api/scores
