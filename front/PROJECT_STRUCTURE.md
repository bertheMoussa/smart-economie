# 📁 Structure du Projet Frontend - Smart-Économie

## 🎯 Vue d'ensemble

Le projet frontend de Smart-Économie a été restructuré en une architecture modulaire avec React Router pour une meilleure organisation et maintenabilité.

## 📂 Arborescence

```
src/app/
├── App.tsx                 # Composant principal avec routing
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # En-tête avec navigation
│   │   └── Footer.tsx      # Pied de page
│   └── ui/                 # Composants UI (existants)
├── pages/
│   ├── Home.tsx            # Page d'accueil
│   ├── About.tsx           # À-Propos
│   ├── Subscription.tsx    # Souscription avec plans
│   ├── Claims.tsx          # Déclaration de sinistres
│   ├── Contact.tsx         # Contact et FAQ
│   ├── History.tsx         # Notre histoire
│   └── index.ts            # Exports centralisés
├── forms/
│   ├── FormComponents.tsx  # Composants réutilisables
│   └── index.ts            # Exports centralisés
├── styles/                 # Fichiers CSS (existants)
└── main.tsx                # Point d'entrée (existant)
```

## 🔗 Système de Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Page d'accueil avec Hero et features |
| `/about` | About | Informations sur Smart-Économie |
| `/subscription` | Subscription | Plans et formulaire de souscription |
| `/claims` | Claims | Déclaration de sinistres |
| `/contact` | Contact | Formulaire de contact et FAQ |
| `/history` | History | Notre histoire et équipe |

## 🎨 Composants Réutilisables

### FormComponents.tsx
Composants pour les formulaires:
- `FormInput` - Champ texte avec validation
- `FormTextArea` - Zone de texte
- `FormSelect` - Liste déroulante
- `FormCheckbox` - Case à cocher
- `FormButton` - Bouton avec états (primary, secondary, danger)

**Utilisation:**
```tsx
import { FormInput, FormButton } from '../forms';

<FormInput 
  label="Email" 
  placeholder="email@example.com"
  type="email"
  required
/>
```

## 🚀 Démarrer le Projet

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build pour production
npm run build
```

## 📋 Pages et Contenu

### 1. **Home (Accueil)**
- Section Hero avec appel à l'action
- Features principales (Valeurs éthiques, Cagnotte communautaire, Paiement participatif)
- Cards informatifs

### 2. **About (À-Propos)**
- Mission et vision
- Valeurs fondamentales
- Comment ça fonctionne

### 3. **Subscription (Souscription)**
- 3 plans tarifaires (Essentiel, Avantages, Premium)
- Formulaire d'inscription
- Comparaison des avantages

### 4. **Claims (Sinistres)**
- Guide déclaration sinistre (4 étapes)
- Formulaire de déclaration
- Historique des déclarations

### 5. **Contact**
- Informations de contact
- Formulaire de message
- FAQ commune

### 6. **History**
- Timeline de l'entreprise
- Vision et engagement
- Présentation de l'équipe

## 🔒 Sécurité et Performance

- Utilisation de React Router v7 pour le routing côté client
- Tailwind CSS pour les styles optimisés
- Composants réutilisables pour éviter la duplication
- Formulaires avec validation

## 📝 Prochaines Étapes

1. ✅ Créer les pages principales
2. ✅ Implémenter le système de routing
3. ✅ Créer des composants de formulaire réutilisables
4. ⏳ Intégrer l'API backend
5. ⏳ Ajouter l'authentification
6. ⏳ Créer l'espace personnel (dashboard)
7. ⏳ Tester et déployer

## 🤝 Intégration Backend

Préparez-vous à intégrer les endpoints suivants:
- POST `/api/auth/signup` - Inscription
- POST `/api/auth/login` - Connexion
- POST `/api/subscriptions` - Créer une souscription
- POST `/api/claims` - Déclarer un sinistre
- GET `/api/user/profile` - Profil utilisateur
- GET `/api/user/claims` - Mes sinistres

## 📱 Responsive Design

Le projet utilise Tailwind CSS et est entièrement responsive pour:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

---

**Développé avec ❤️ pour Smart-Économie**
