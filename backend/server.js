const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

// Initialisation
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenue sur l’API ClickerQuest 🎮' });
});

// Exemple d'endpoint pour récupérer les users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ API ClickerQuest lancée sur http://localhost:${PORT}`);
});
