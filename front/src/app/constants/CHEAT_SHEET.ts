/**
 * CHEAT SHEET - Référence rapide des couleurs
 * Imprimer ce fichier ou l'avoir en favoris!
 */

// 🎨 IMPORTS RAPIDES
import { COLORS, COLOR_CLASSES } from '@/app/constants/colors';

// ============================================================================
// ⚡ UTILISATION LA PLUS COMMUNE
// ============================================================================

// Bouton primaire
<button className={COLOR_CLASSES.primaryButton}>Valider</button>
// Résultat: bg-[#228B22] text-white hover:bg-[#1a6b1a]

// Bouton outline
<button className={COLOR_CLASSES.primaryButtonOutline}>Annuler</button>
// Résultat: border-[#228B22] text-[#228B22] hover:bg-[#e8f5e9]

// Input avec focus
<input className={`border rounded ${COLOR_CLASSES.inputFocus}`} />
// Résultat: focus:border-[#228B22] focus:ring-[#228B22]

// Badge actif
<span className={COLOR_CLASSES.activeBadge}>Actif</span>
// Résultat: bg-[#e8f5e9] text-[#228B22]

// ============================================================================
// 🎯 VALEURS HEX COURANTES
// ============================================================================

// Couleur primaire
COLORS.primary.main     // #228B22 ← UTILISER POUR PRESQUE TOUT

// Hover/Active
COLORS.primary.dark     // #1a6b1a

// Background clair
COLORS.primary.light    // #e8f5e9

// Texte
COLORS.text.primary     // #0a2342 (texte par défaut)
COLORS.text.white       // #ffffff (sur couleur)

// Background
COLORS.background.light // #f0f4f8 (pages)
COLORS.background.white // #ffffff (cards)

// ============================================================================
// 🔗 PATTERN: Gradient
// ============================================================================

// Gradient de droite à gauche
style={{
  background: `linear-gradient(to right, ${COLORS.primary.main}, ${COLORS.primary.dark})`
}}

// ============================================================================
// 🔗 PATTERN: Border avec couleur
// ============================================================================

// Bordure avec couleur primaire
className="border-l-4 pl-4"
style={{ borderColor: COLORS.primary.main }}

// ============================================================================
// 🔗 PATTERN: Texte avec couleur
// ============================================================================

// Texte primaire
<span style={{ color: COLORS.primary.main }}>Texte vert</span>

// Texte sur fond vert
<span style={{ color: COLORS.text.white }}>Texte blanc</span>

// ============================================================================
// ❌ À NE JAMAIS FAIRE
// ============================================================================

// ❌ BAD: Hard-coder
<button className="bg-[#228B22]">NON</button>

// ❌ BAD: Tailwind standard
<button className="bg-green-500">NON</button>

// ❌ BAD: Couleur littérale
style={{ backgroundColor: '#228B22' }}

// ============================================================================
// 💭 QUAND UTILISER QUOI
// ============================================================================

/*
COLOR_CLASSES → Utiliser pour les styles PRÉDÉFINIS et COMPLEXES
  ✓ Boutons
  ✓ Inputs avec focus
  ✓ Badges
  
COLORS → Utiliser pour les VALEURS INDIVIDUELLES
  ✓ style={{ color: COLORS.primary.main }}
  ✓ style={{ backgroundColor: COLORS.background.light }}
  ✓ Gradients: `linear-gradient(...${COLORS.primary.main}...)`
  ✓ Conditions: if (status === 'active') return COLORS.status.success
*/

// ============================================================================
// 📋 TABLEAU RAPIDE: Quoi importer?
// ============================================================================

/*
┌─────────────────┬──────────────────────────────────┐
│ Cas d'usage     │ Import requis                     │
├─────────────────┼──────────────────────────────────┤
│ Bouton primaire │ COLOR_CLASSES                     │
│ Input focus     │ COLOR_CLASSES                     │
│ Badge           │ COLOR_CLASSES                     │
│ Couleur hex     │ COLORS                           │
│ Style inline    │ COLORS                           │
│ Gradient        │ COLORS (values) + style          │
│ Conditions      │ COLORS                           │
└─────────────────┴──────────────────────────────────┘
*/

// ============================================================================
// 🧪 EXEMPLES RÉELS
// ============================================================================

// Exemple 1: Login page
function LoginPage() {
  return (
    <div style={{ backgroundColor: COLORS.background.light }}>
      <h1 style={{ color: COLORS.text.primary }}>Connexion</h1>
      <input className={`border rounded ${COLOR_CLASSES.inputFocus}`} />
      <button className={COLOR_CLASSES.primaryButton}>Se connecter</button>
    </div>
  );
}

// Exemple 2: Dashboard card
function DashboardCard() {
  return (
    <div
      className="border-l-4 pl-4"
      style={{
        backgroundColor: COLORS.background.white,
        borderColor: COLORS.primary.main,
      }}
    >
      <h3 style={{ color: COLORS.text.primary }}>Titre</h3>
      <span className={COLOR_CLASSES.activeBadge}>Actif</span>
    </div>
  );
}

// Exemple 3: Hero section
function HeroSection() {
  return (
    <section
      style={{
        background: `linear-gradient(to right, ${COLORS.primary.main}, ${COLORS.primary.dark})`,
      }}
      className="py-12"
    >
      <h1 style={{ color: COLORS.text.white }}>Titre hero</h1>
      <button className={COLOR_CLASSES.primaryButtonOutline}>Action</button>
    </section>
  );
}

// ============================================================================
// 🔄 MIGRATION RAPIDE: Avant → Après
// ============================================================================

/*
AVANT (sans variables):
<button className="bg-[#228B22] text-white hover:bg-[#1a6b1a]">Ok</button>

APRÈS (avec variables):
<button className={COLOR_CLASSES.primaryButton}>Ok</button>

GAIN: Lisibilité +100%, Maintenance +300%
*/

// ============================================================================
// 📞 BESOIN D'AIDE?
// ============================================================================

/*
1. Consulter COLORS_USAGE_GUIDE.md → Guide complet
2. Consulter IMPLEMENTATION_EXAMPLES.ts → Plus d'exemples
3. Regarder dans colors.ts → Pour voir toutes les variables
4. Ouvrir README.md → Pour la documentation complète
*/

// ============================================================================
// ✨ ASTUCES PRO
// ============================================================================

/*
ASTUCE 1: Alias TypeScript
Si vous trouvez l'import long, ajouter un alias:
  import { COLORS as C } from '@/app/constants/colors';
  → C.primary.main

ASTUCE 2: Réutiliser les classes
export const myCustomClass = `${COLOR_CLASSES.primaryButton} shadow-lg`;

ASTUCE 3: Conditionnels
const bgColor = isActive 
  ? COLORS.status.success 
  : COLORS.status.error;
style={{ backgroundColor: bgColor }}

ASTUCE 4: Mapping
const statuses = {
  'Actif': COLORS.status.success,
  'Erreur': COLORS.status.error,
  'Attente': COLORS.status.warning,
};
style={{ backgroundColor: statuses[status] }}
*/

export { COLORS, COLOR_CLASSES };
