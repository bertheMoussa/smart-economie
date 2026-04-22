#!/usr/bin/env bash

# 🚀 Smart-Économie Frontend Setup
# Ce script configure le projet et lance le serveur de développement

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         🚀 Smart-Économie Frontend - Setup Guide               ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo "✅ Dépendances installées"
else
    echo "✅ Dépendances déjà installées"
fi

echo ""
echo "🏗️  Structure du projet créée:"
echo ""
echo "src/app/"
echo "  ├── App.tsx                    # Application principale avec routing"
echo "  ├── components/"
echo "  │   ├── layout/"
echo "  │   │   ├── Header.tsx         # En-tête avec navigation"
echo "  │   │   └── Footer.tsx         # Pied de page"
echo "  │   └── ui/                    # Composants UI (existing)"
echo "  ├── pages/"
echo "  │   ├── Home.tsx               # Accueil"
echo "  │   ├── About.tsx              # À-Propos"
echo "  │   ├── Subscription.tsx       # Souscription"
echo "  │   ├── Claims.tsx             # Sinistres"
echo "  │   ├── Contact.tsx            # Contact"
echo "  │   ├── History.tsx            # Histoire"
echo "  │   ├── AdvancedExample.tsx    # Exemple avancé"
echo "  │   └── index.ts               # Exports"
echo "  ├── forms/"
echo "  │   ├── FormComponents.tsx     # Composants réutilisables"
echo "  │   └── index.ts               # Exports"
echo "  ├── utils/"
echo "  │   └── helpers.ts             # Fonctions utilitaires"
echo "  ├── constants.ts               # Constantes de l'app"
echo "  └── styles/                    # Styles CSS"
echo ""

echo "📋 Pages disponibles:"
echo "  • / (Accueil)"
echo "  • /about (À-Propos)"
echo "  • /subscription (Souscription)"
echo "  • /claims (Sinistres)"
echo "  • /contact (Contact)"
echo "  • /history (Histoire)"
echo ""

echo "📖 Documentation:"
echo "  • PROJECT_STRUCTURE.md    - Structure du projet"
echo "  • DEVELOPMENT_GUIDE.md    - Guide de développement"
echo ""

echo "🎯 Prochaines étapes:"
echo "  1. npm run dev              - Lancer le serveur de développement"
echo "  2. Ouvrir http://localhost:5173"
echo "  3. Consulter DEVELOPMENT_GUIDE.md pour ajouter des pages"
echo ""

echo "⚙️  Commandes disponibles:"
echo "  npm run dev                - Démarrer le serveur de développement"
echo "  npm run build              - Build pour production"
echo ""

echo "💡 Conseils:"
echo "  • Utilisez les constantes dans src/app/constants.ts"
echo "  • Réutilisez les composants de formulaire de src/app/forms/"
echo "  • Consultez src/app/pages/AdvancedExample.tsx pour un exemple complet"
echo "  • Utilisez les utilitaires dans src/app/utils/helpers.ts"
echo ""

echo "🚀 Démarrage du serveur..."
npm run dev
