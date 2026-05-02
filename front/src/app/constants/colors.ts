/**
 * Constantes de couleurs pour l'application Smart-Économie
 * Ces variables centralisent toutes les couleurs utilisées
 * pour faciliter les modifications de branding
 */

export const COLORS = {
  // Couleurs primaires
  primary: {
    main: '#228B22',      // Vert Forest Green
    dark: '#1a6b1a',      // Vert plus foncé (hover)
    light: '#e8f5e9',     // Vert très clair (backgrounds)
  },

  // Couleurs de texte et neutrales
  text: {
    primary: '#0a2342',   // Bleu foncé - texte principal
    secondary: '#5a5a5a', // Gris - texte secondaire
    light: '#a0a0a0',     // Gris clair
    white: '#ffffff',     // Blanc
  },

  // Couleurs de fond
  background: {
    light: '#f0f4f8',     // Gris bleu très clair
    white: '#ffffff',     // Blanc
    grey: '#f5f5f5',      // Gris clair
  },

  // Couleurs de status et alerts
  status: {
    success: '#228B22',   // Succès (vert)
    error: '#dc2626',     // Erreur (rouge)
    warning: '#ea580c',   // Avertissement (orange)
    info: '#2563eb',      // Info (bleu)
  },

  // Couleurs de bordures et dividers
  border: {
    primary: '#228B22',   // Bordure primaire (vert)
    light: '#e5e7eb',     // Bordure claire
    grey: '#d1d5db',      // Bordure grise
  },

  // Couleurs accessoires
  accent: {
    blue: '#2563eb',      // Bleu
    purple: '#9333ea',    // Violet
    orange: '#ea580c',    // Orange
    red: '#dc2626',       // Rouge
  },
};

/**
 * Classes Tailwind CSS préconfigurées pour les couleurs
 * Utiliser ces objets pour des styles cohérents
 */
export const COLOR_CLASSES = {
  // Bouton primaire
  primaryButton: 'bg-[#228B22] text-white hover:bg-[#1a6b1a] transition',
  primaryButtonOutline: 'border-2 border-[#228B22] text-[#228B22] hover:bg-[#e8f5e9] transition',
  
  // Inputs et focuses
  inputFocus: 'focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]',
  
  // Badges et statuts
  activeBadge: 'bg-[#e8f5e9] text-[#228B22]',
  
  // Textes et icônes
  primaryText: 'text-[#228B22]',
  primaryIcon: 'text-[#228B22]',
  
  // Bordures
  primaryBorder: 'border-[#228B22]',
};

/**
 * Fonction utilitaire pour générer des styles dynamiques
 * @param component - Type de composant ('button', 'input', 'badge', etc.)
 * @returns Objet de style ou classe CSS
 */
export const getColorStyle = (component: string): string => {
  switch (component) {
    case 'button-primary':
      return COLOR_CLASSES.primaryButton;
    case 'button-outline':
      return COLOR_CLASSES.primaryButtonOutline;
    case 'input':
      return COLOR_CLASSES.inputFocus;
    case 'badge-active':
      return COLOR_CLASSES.activeBadge;
    default:
      return '';
  }
};
