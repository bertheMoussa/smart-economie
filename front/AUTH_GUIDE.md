# 🔐 Guide d'Authentification & Espaces Utilisateur

## 📋 Structure

### Authentification
- **Page de Login**: `/login` (accessible sans authentification)
- **Context Auth**: `src/app/context/AuthContext.tsx`
- **Hook useAuth**: `src/app/hooks/useAuth.ts`
- **ProtectedRoute**: `src/app/components/ProtectedRoute.tsx`

### Espaces Utilisateur
- **Dashboard Particulier**: `/dashboard/particulier` (pour individus)
- **Dashboard Entreprise**: `/dashboard/entreprise` (pour entreprises)

---

## 🚀 Utilisation

### 1. Utiliser le Hook d'Authentification

```tsx
import { useAuth } from '../hooks/useAuth';

export default function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <p>Veuillez vous connecter</p>;
  }

  return <p>Bienvenue {user?.firstName}!</p>;
}
```

### 2. Protéger une Route

```tsx
import { ProtectedRoute } from './components/ProtectedRoute';

<Route
  path="/dashboard/particulier"
  element={
    <ProtectedRoute requiredType="particulier">
      <DashboardParticulier />
    </ProtectedRoute>
  }
/>
```

### 3. Connexion d'un Utilisateur

```tsx
const { login } = useAuth();

// Particulier
await login('email@example.com', 'password', 'particulier');

// Entreprise
await login('email@example.com', 'password', 'entreprise');
```

---

## 💾 Données Utilisateur

```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;           // Particulier
  companyName?: string;        // Entreprise
  type: 'particulier' | 'entreprise';
  phone?: string;
  avatar?: string;
}
```

---

## 🔄 Flux de Connexion

```
1. Utilisateur arrive sur /login
2. Sélectionne son type (Particulier ou Entreprise)
3. Entre ses identifiants
4. Appel login() avec email, password, type
5. Utilisateur créé dans le Context
6. Stocké dans localStorage
7. Redirection vers le bon dashboard
```

---

## 🎯 Dashboards

### Dashboard Particulier
- Aperçu (stats personnelles)
- Mes Souscriptions
- Mes Sinistres
- Profil

### Dashboard Entreprise
- Aperçu (stats entreprise)
- Gestion des Employés
- Contrats Actifs
- Sinistres Déclarés
- Rapports & Statistiques
- Paramètres

---

## 📡 API à Intégrer

### TODO: Remplacer les appels simulés par l'API réelle

**Login Endpoint:**
```
POST /api/auth/login
Body: { email, password, type }
Response: { user, token }
```

**Signup Endpoint:**
```
POST /api/auth/signup
Body: { firstName, lastName/companyName, email, password, phone, type }
Response: { user, token }
```

**Update Profile:**
```
PUT /api/user/profile
Body: { userData }
Response: { user }
```

---

## 🔐 Sécurité

- ✅ Stockage du token dans localStorage
- ✅ Routes protégées avec ProtectedRoute
- ✅ Vérification du type d'utilisateur
- ⏳ TODO: Ajouter les tokens JWT
- ⏳ TODO: Ajouter les refresh tokens
- ⏳ TODO: Ajouter la validation côté serveur

---

## 📝 Exemple Complet

```tsx
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return <p>Non authentifié</p>;

  return (
    <div>
      <h1>Bienvenue {user?.firstName}</h1>
      <p>Email: {user?.email}</p>
      <p>Type: {user?.type}</p>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
}
```

---

## ✅ Prochaines Étapes

1. [ ] Intégrer l'API backend pour login/signup
2. [ ] Ajouter les tokens JWT
3. [ ] Implémenter le refresh token
4. [ ] Ajouter la validation côté serveur
5. [ ] Ajouter le "Remember Me"
6. [ ] Ajouter la récupération de mot de passe
7. [ ] Ajouter la vérification email
8. [ ] Implémenter le 2FA

---

**Développé avec ❤️ pour Smart-Économie**
