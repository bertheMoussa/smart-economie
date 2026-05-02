/**
 * Exemples d'intégration des variables de couleurs
 * dans les composants Smart-Économie
 * 
 * Ces fichiers montrent comment modifier progressivement
 * vos composants pour utiliser les variables centralisées
 */

// ============================================================================
// EXEMPLE 1: Utiliser dans un simple bouton
// ============================================================================

/*
AVANT (hard-coded):
<button className="bg-[#228B22] text-white hover:bg-[#1a6b1a] transition">
  Cliquer
</button>

APRÈS (avec variables):
*/
import { COLOR_CLASSES } from '@/app/constants/colors';

export function ButtonExample() {
  return (
    <button className={COLOR_CLASSES.primaryButton}>
      Cliquer
    </button>
  );
}

// ============================================================================
// EXEMPLE 2: Utiliser dans un input
// ============================================================================

/*
AVANT (hard-coded):
<input
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]"
/>

APRÈS (avec variables):
*/
import { COLOR_CLASSES, COLORS } from '@/app/constants/colors';

export function InputExample() {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${COLOR_CLASSES.inputFocus}`}
      style={{ borderColor: COLORS.border.light }}
    />
  );
}

// ============================================================================
// EXEMPLE 3: Utiliser dans une badge
// ============================================================================

/*
AVANT (hard-coded):
<span className="px-3 py-1 rounded-full bg-[#e8f5e9] text-[#228B22] text-xs font-bold">
  Actif
</span>

APRÈS (avec variables):
*/
import { COLOR_CLASSES } from '@/app/constants/colors';

export function BadgeExample() {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${COLOR_CLASSES.activeBadge}`}>
      Actif
    </span>
  );
}

// ============================================================================
// EXEMPLE 4: Utiliser dans un card avec bordure
// ============================================================================

/*
AVANT (hard-coded):
<div className="border-l-4 border-[#228B22] pl-4 py-4">
  <h3 className="font-bold text-[#0a2342]">Titre</h3>
</div>

APRÈS (avec variables):
*/
import { COLORS } from '@/app/constants/colors';

export function CardExample() {
  return (
    <div
      className="border-l-4 pl-4 py-4"
      style={{ borderColor: COLORS.primary.main }}
    >
      <h3 className="font-bold" style={{ color: COLORS.text.primary }}>
        Titre
      </h3>
    </div>
  );
}

// ============================================================================
// EXEMPLE 5: Utiliser dans un Hero avec gradient
// ============================================================================

/*
AVANT (hard-coded):
<section className="py-12 bg-gradient-to-r from-[#228B22] to-[#1a6b1a]">
  <p className="text-white">Texte</p>
</section>

APRÈS (avec variables):
*/
import { COLORS } from '@/app/constants/colors';

export function HeroExample() {
  return (
    <section
      className="py-12"
      style={{
        background: `linear-gradient(to right, ${COLORS.primary.main}, ${COLORS.primary.dark})`,
      }}
    >
      <p style={{ color: COLORS.text.white }}>Texte</p>
    </section>
  );
}

// ============================================================================
// EXEMPLE 6: Utiliser dans un modal ou dialog
// ============================================================================

/*
AVANT (hard-coded):
<div className="bg-white rounded-lg p-6">
  <button className="bg-[#228B22] text-white hover:bg-[#1a6b1a]">
    Confirmer
  </button>
</div>

APRÈS (avec variables):
*/
import { COLORS, COLOR_CLASSES } from '@/app/constants/colors';

export function ModalExample() {
  return (
    <div
      className="rounded-lg p-6"
      style={{ backgroundColor: COLORS.background.white }}
    >
      <button className={COLOR_CLASSES.primaryButton}>
        Confirmer
      </button>
    </div>
  );
}

// ============================================================================
// EXEMPLE 7: Utiliser dans des icônes
// ============================================================================

/*
AVANT (hard-coded):
<i className="fa-solid fa-check text-[#228B22]"></i>

APRÈS (avec variables):
*/
import { COLOR_CLASSES } from '@/app/constants/colors';

export function IconExample() {
  return (
    <i className={`fa-solid fa-check ${COLOR_CLASSES.primaryIcon}`}></i>
  );
}

// ============================================================================
// EXEMPLE 8: Utiliser dans un composant complexe
// ============================================================================

/*
AVANT (scattered dans le composant):
export function ComplexComponent() {
  return (
    <div className="bg-[#f0f4f8]">
      <h1 className="text-[#0a2342]">Title</h1>
      <button className="bg-[#228B22] text-white hover:bg-[#1a6b1a]">
        Action
      </button>
      <span className="text-[#228B22]">Success</span>
    </div>
  );
}

APRÈS (avec variables):
*/
import { COLORS, COLOR_CLASSES } from '@/app/constants/colors';

export function ComplexComponentExample() {
  return (
    <div style={{ backgroundColor: COLORS.background.light }}>
      <h1 style={{ color: COLORS.text.primary }}>Title</h1>
      <button className={COLOR_CLASSES.primaryButton}>
        Action
      </button>
      <span style={{ color: COLORS.primary.main }}>Success</span>
    </div>
  );
}

// ============================================================================
// PLAN DE MIGRATION RECOMMANDÉ
// ============================================================================

/*
Vous avez plusieurs options pour intégrer les variables:

1. MIGRATION PROGRESSIVE (RECOMMANDÉ):
   - Utiliser les nouvelles variables dans les nouveaux composants
   - Migrer les composants existants progressivement
   - Avantage: Pas de risque de casser quelque chose

2. MIGRATION RAPIDE (MOINS SAFE):
   - Utiliser find & replace pour tous les fichiers
   - Utiliser COLOR_CLASSES partout à la fois
   - Avantage: Plus rapide, mais plus risqué

3. MIGRATION HYBRIDE (BON COMPROMIS):
   - Migrer les composants principaux d'abord
   - Login, Home, Dashboard, etc.
   - Puis migrer les autres progressivement
*/

// ============================================================================
// FICHIERS À MIGRER (PAR PRIORITÉ)
// ============================================================================

/*
Priorité HAUTE (composants critiques):
1. src/app/pages/Login.tsx ✅
2. src/app/pages/Home.tsx ✅
3. src/app/components/Header.tsx ✅
4. src/app/components/DevisModal.tsx ✅
5. src/app/pages/DashboardParticulier.tsx ✅

Priorité MOYENNE:
6. src/app/pages/Subscription.tsx ✅
7. src/app/pages/Contact.tsx ✅
8. src/app/pages/About.tsx ✅
9. src/app/components/ChatMessenger.tsx ✅

Priorité BASSE:
10. src/app/pages/AdvancedExample.tsx (démo)
11. src/app/pages/History.tsx
12. Autres pages moins visitées
*/

// ============================================================================
// COMMENT UTILISER CE GUIDE
// ============================================================================

/*
1. Copiez les exemples ci-dessus dans vos composants
2. Importez les constantes de couleurs:
   import { COLORS, COLOR_CLASSES } from '@/app/constants/colors';

3. Remplacez les valeurs hard-codées par les variables
4. Testez chaque composant dans le navigateur
5. Commencez par les composants critiques

Bon coding! 🎨
*/
