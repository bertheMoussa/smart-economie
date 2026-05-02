/**
 * Guide d'utilisation des variables de couleurs
 * 
 * Ce document explique comment utiliser les constantes de couleurs
 * définies dans src/app/constants/colors.ts
 */

// ============================================================================
// 1. IMPORTER LES COULEURS DANS VOS COMPOSANTS
// ============================================================================

// Exemple: dans un composant React
import { COLORS, COLOR_CLASSES, getColorStyle } from '@/app/constants/colors';

// ============================================================================
// 2. UTILISER LES COULEURS - EXEMPLES
// ============================================================================

// Exemple 1: Accéder aux valeurs hex directes
const buttonBackground = COLORS.primary.main;        // '#228B22'
const errorColor = COLORS.status.error;              // '#dc2626'
const textColor = COLORS.text.primary;               // '#0a2342'

// Exemple 2: Utiliser les classes CSS préconfigurées dans JSX
function MyComponent() {
  return (
    <>
      {/* Bouton primaire avec classes prédéfinies */}
      <button className={COLOR_CLASSES.primaryButton}>
        Cliquer ici
      </button>

      {/* Bouton outline */}
      <button className={COLOR_CLASSES.primaryButtonOutline}>
        Retour
      </button>

      {/* Input avec focus style */}
      <input
        type="text"
        className={`w-full px-4 py-2 border rounded-lg ${COLOR_CLASSES.inputFocus}`}
        placeholder="Entrez du texte"
      />

      {/* Badge de statut actif */}
      <span className={COLOR_CLASSES.activeBadge}>Actif</span>

      {/* Icône primaire */}
      <i className={`fa-solid fa-check ${COLOR_CLASSES.primaryIcon}`}></i>
    </>
  );
}

// Exemple 3: Utiliser la fonction getColorStyle
function DynamicButton({ variant }: { variant: string }) {
  return (
    <button className={getColorStyle(variant)}>
      Bouton dynamique
    </button>
  );
}

// Exemple 4: Combinaison avec Tailwind
function CardComponent() {
  return (
    <div
      style={{ borderColor: COLORS.border.primary }}
      className="border-l-4 p-4 rounded-lg"
      style={{ backgroundColor: COLORS.background.light }}
    >
      <h3 style={{ color: COLORS.text.primary }} className="font-bold">
        Titre
      </h3>
      <p style={{ color: COLORS.text.secondary }}>
        Description
      </p>
    </div>
  );
}

// ============================================================================
// 3. STRUCTURE DES COULEURS
// ============================================================================

/*
COLORS.primary:
  - main: '#228B22'      → Couleur primaire principale
  - dark: '#1a6b1a'      → Couleur pour hover/active
  - light: '#e8f5e9'     → Arrière-plan léger

COLORS.text:
  - primary: '#0a2342'   → Texte principal
  - secondary: '#5a5a5a' → Texte secondaire
  - light: '#a0a0a0'     → Texte très clair
  - white: '#ffffff'     → Texte blanc

COLORS.background:
  - light: '#f0f4f8'     → Arrière-plan léger
  - white: '#ffffff'     → Blanc pur
  - grey: '#f5f5f5'      → Gris

COLORS.status:
  - success: '#228B22'   → Succès
  - error: '#dc2626'     → Erreur
  - warning: '#ea580c'   → Avertissement
  - info: '#2563eb'      → Information

COLORS.border:
  - primary: '#228B22'   → Bordure primaire
  - light: '#e5e7eb'     → Bordure claire
  - grey: '#d1d5db'      → Bordure grise

COLORS.accent:
  - blue: '#2563eb'      → Accents bleus
  - purple: '#9333ea'    → Accents violets
  - orange: '#ea580c'    → Accents orange
  - red: '#dc2626'       → Accents rouges
*/

// ============================================================================
// 4. MODIFICATION FUTURE - COMMENT CHANGER LE BRANDING
// ============================================================================

/*
Si vous devez changer la couleur primaire de #228B22 à une autre couleur:

1. Ouvrir: src/app/constants/colors.ts
2. Modifier la ligne:
   primary: {
     main: '#NOUVELLE_COULEUR',     ← Changer ici
     dark: '#VERSION_PLUS_FONCEE',   ← Changer ici aussi
     light: '#VERSION_CLAIRE',       ← Et ici
   },
3. Tous les composants seront automatiquement mis à jour!
4. Pas besoin de chercher/remplacer dans tous les fichiers.

AVANT (sans variables):
- Chercher #228B22 dans 30+ fichiers
- Chercher #1a6b1a dans 20+ fichiers
- Chercher #e8f5e9 dans 15+ fichiers
- Risque d'oublier des références

APRÈS (avec variables):
- Modifier 3 lignes dans colors.ts
- TOUT est mis à jour automatiquement!
*/

// ============================================================================
// 5. BONNES PRATIQUES
// ============================================================================

/*
✅ À FAIRE:
- Importer depuis @/app/constants/colors
- Utiliser COLORS.primary.main pour les valeurs hex
- Utiliser COLOR_CLASSES pour les styles prédéfinis
- Combiner avec Tailwind pour une flexibilité maximale

❌ À NE PAS FAIRE:
- Hard-coder #228B22 directement dans les composants
- Utiliser bg-green-500 ou autres couleurs Tailwind
- Mélanger les sources de couleurs (variables + hard-code)
- Dupliquer les valeurs de couleurs
*/

// ============================================================================
// 6. ALIAS D'IMPORT (Optional - pour raccourcir)
// ============================================================================

/*
Vous pouvez ajouter des alias dans vos fichiers:

import { COLORS as C, COLOR_CLASSES as CC } from '@/app/constants/colors';

// Puis utiliser:
C.primary.main
CC.primaryButton

Mais les noms longs sont meilleurs pour la lisibilité!
*/
