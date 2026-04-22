# 🚀 Guide de Développement - Smart-Économie Frontend

## 📖 Créer une Nouvelle Page

### Étape 1: Créer le fichier de la page

Créez un nouveau fichier dans `src/app/pages/` (par exemple: `NewPage.tsx`):

```tsx
export default function NewPage() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-[#0a2342] mb-12">Titre de la page</h1>
        
        {/* Contenu ici */}
      </div>
    </div>
  );
}
```

### Étape 2: Ajouter la route dans App.tsx

```tsx
import NewPage from './pages/NewPage';

// ...dans Routes:
<Route path="/new-page" element={<NewPage />} />
```

### Étape 3: Ajouter au menu de navigation

Modifiez `src/app/constants.ts`:

```tsx
export const NAV_ITEMS = [
  // ...
  { label: 'Nouvelle Page', path: '/new-page' },
];
```

## 🎨 Utiliser les Composants de Formulaire

### Formulaire d'Inscription

```tsx
import { FormInput, FormSelect, FormButton, FormCheckbox } from '../forms';
import { SUBSCRIPTION_PLANS } from '../constants';

export default function MyForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    email: '',
    plan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Prénom"
        placeholder="Entrez votre prénom"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        required
      />

      <FormInput
        label="Email"
        type="email"
        placeholder="email@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <FormSelect
        label="Plan"
        options={SUBSCRIPTION_PLANS.map((p) => ({
          value: p.id,
          label: p.name,
        }))}
        value={formData.plan}
        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
        required
      />

      <FormCheckbox
        label="J'accepte les conditions"
        required
      />

      <FormButton>Soumettre</FormButton>
    </form>
  );
}
```

## 🎨 Utiliser les Constantes

```tsx
import { SUBSCRIPTION_PLANS, FAQ_ITEMS, TEAM_MEMBERS } from '../constants';

// Utiliser les plans
{SUBSCRIPTION_PLANS.map((plan) => (
  <div key={plan.id}>
    <h3>{plan.name}</h3>
    <p>${plan.price}{plan.currency}</p>
  </div>
))}

// Utiliser la FAQ
{FAQ_ITEMS.map((faq, index) => (
  <div key={index}>
    <h4>{faq.question}</h4>
    <p>{faq.answer}</p>
  </div>
))}
```

## 🎨 Classes Tailwind Courantes

### Couleurs

```tsx
// Teintes principales
text-[#0a2342]     // Bleu foncé (primaire)
text-green-500     // Vert
text-blue-900      // Bleu
text-gray-800      // Gris foncé

// Backgrounds
bg-[#f0f4f8]       // Gris clair (page)
bg-white           // Blanc
bg-green-50        // Fond vert clair
bg-blue-50         // Fond bleu clair
```

### Layouts courants

```tsx
// Container centré
<div className="container mx-auto px-6 max-w-6xl">

// Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flex items
<div className="flex items-center justify-between gap-4">

// Cards
<div className="bg-white rounded-2xl shadow-lg p-8">

// Buttons
<button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
```

## 📱 Responsive Design

```tsx
// Mobile first
<div className="text-lg md:text-2xl lg:text-4xl">
  // Sur mobile: text-lg
  // Sur tablet (768px+): text-2xl
  // Sur desktop (1024px+): text-4xl
</div>

// Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  // 1 colonne sur mobile
  // 2 colonnes sur tablet
  // 3 colonnes sur desktop
</div>
```

## 🔗 Navigation Programmatique

```tsx
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/subscription?plan=premium');
  };

  return (
    <button onClick={handleClick}>
      Aller à Souscription
    </button>
  );
}
```

## 📡 Intégrer l'API

### Exemple: Appel API pour soumettre un formulaire

```tsx
import { useState } from 'react';

export default function SubscriptionForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erreur lors de la souscription');
      
      const data = await response.json();
      console.log('Succès:', data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... champs de formulaire ... */}
      {error && <p className="text-red-500">{error}</p>}
      <FormButton loading={loading}>Soumettre</FormButton>
    </form>
  );
}
```

## 🧪 Structure de Fichiers pour les Nouvelles Features

```
src/app/
├── pages/
│   └── MyFeature.tsx          # Page principale
├── forms/
│   └── MyFeatureForm.tsx       # Formulaire associé
├── components/
│   └── MyFeatureCard.tsx       # Composants spécifiques
└── hooks/
    └── useMyFeature.ts         # Hooks React personnalisés
```

## ⚠️ Bonnes Pratiques

1. **Toujours utiliser `const` au lieu de `let`**
2. **Nommer les composants en PascalCase** (MyComponent)
3. **Nommer les fonctions en camelCase** (myFunction)
4. **Utiliser les constantes** pour les données répétées
5. **Typer correctement avec TypeScript**
6. **Diviser les gros composants** en plus petits
7. **Réutiliser les composants de formulaires**
8. **Tester le responsive** sur tous les appareils

## 🐛 Debugging

### Console
```tsx
console.log('Variable:', variable);
console.error('Erreur:', error);
console.table(arrayOfObjects);
```

### React DevTools
- Installez l'extension React DevTools
- Inspectez les composants et leurs props
- Vérifiez l'état (state) et les hooks

## 🚀 Déploiement

```bash
# Build pour production
npm run build

# Les fichiers sont dans dist/
# Déployez le contenu du dossier dist/ sur votre serveur
```

---

**Besoin d'aide? Consultez [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)**
