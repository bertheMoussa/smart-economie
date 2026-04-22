// Navigation items for header
export const NAV_ITEMS = [
  { label: 'Accueil', path: '/' },
  { label: 'À-propos', path: '/about' },
  { label: 'Souscription', path: '/subscription' },
  { label: 'Sinistres', path: '/claims' },
  { label: 'Contact', path: '/contact' },
  { label: 'Histoire', path: '/history' },
];

// Subscription Plans
export const SUBSCRIPTION_PLANS = [
  {
    id: 'essential',
    name: 'Plan Essentiel',
    price: 29,
    currency: '€',
    period: '/mois',
    color: 'blue',
    features: [
      'Couverture de base',
      'Support client 24/7',
      'Accès au portail',
    ],
    notIncluded: ['Cagnotte communautaire'],
    cta: 'Choisir ce plan',
  },
  {
    id: 'avantages',
    name: 'Plan Avantages',
    price: 59,
    currency: '€',
    period: '/mois',
    color: 'green',
    badge: 'POPULAIRE',
    features: [
      'Couverture complète',
      'Support prioritaire',
      'Accès cagnotte',
      'Remboursement 100%',
    ],
    cta: 'Choisir ce plan',
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: 99,
    currency: '€',
    period: '/mois',
    color: 'purple',
    features: [
      'Couverture maximale',
      'Gestionnaire personnel',
      'Assistance 24/7 VIP',
      'Avantages exclusifs',
    ],
    cta: 'Choisir ce plan',
  },
];

// Claims types
export const CLAIM_TYPES = [
  { value: 'material', label: 'Sinistre matériel' },
  { value: 'bodily', label: 'Sinistre corporel' },
  { value: 'liability', label: 'Sinistre responsabilité civile' },
  { value: 'other', label: 'Autre' },
];

// Contact form subjects
export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'Question générale' },
  { value: 'support', label: 'Support technique' },
  { value: 'complaint', label: 'Réclamation' },
  { value: 'other', label: 'Autre' },
];

// Company info
export const COMPANY_INFO = {
  name: 'Smart-Économie',
  phone: '+22 535 257 390',
  email: 'dizinn@ecumnnle.com',
  tagline: "L'ASSURANCE ÉCONOMIQUE",
};

// FAQ items
export const FAQ_ITEMS = [
  {
    question: 'Quel est le délai de traitement?',
    answer: 'Nous traitons les demandes sous 24-48 heures',
  },
  {
    question: 'Comment modifier ma souscription?',
    answer: 'Accédez à votre espace personnel pour modifier vos informations',
  },
  {
    question: 'Puis-je résilier mon contrat?',
    answer: 'Oui, avec un préavis de 30 jours via votre espace personnel',
  },
  {
    question: 'Comment accéder à la cagnotte communautaire?',
    answer: 'Les membres du Plan Avantages et Premium y ont accès',
  },
];

// Timeline events
export const TIMELINE_EVENTS = [
  {
    year: 2020,
    title: 'La Naissance d\'une Idée',
    description:
      'Smart-Économie a commencé comme une simple idée: créer une assurance qui respecte les valeurs éthiques et religieuses.',
  },
  {
    year: 2021,
    title: 'Lancement de la Plateforme',
    description:
      'Après un an de développement, nous avons lancé notre plateforme avec les premiers clients en ligne. La réponse a dépassé nos attentes!',
  },
  {
    year: 2022,
    title: 'Expansion Régionale',
    description:
      'Nous avons étendu nos services à plusieurs pays. La communauté a grandi de 500% cette année-là.',
  },
  {
    year: 2023,
    title: 'Innovation Technologique',
    description:
      'Lancement de la cagnotte communautaire et des paiements participatifs. Une révolution dans le secteur!',
  },
  {
    year: 2024,
    title: 'Aujourd\'hui',
    description:
      'Avec plus de 50 000 membres, nous continuons à innover et à servir notre communauté avec intégrité et transparence.',
  },
];

// Team members
export const TEAM_MEMBERS = [
  {
    name: 'Ahmed Benomar',
    role: 'CEO & Co-fondateur',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'CTO & Co-fondatrice',
  },
  {
    name: 'Mohammad Khalil',
    role: 'Head of Operations',
  },
];

// Values
export const VALUES = [
  { label: 'Transparence totale', icon: 'fa-eye' },
  { label: 'Conformité Sharia', icon: 'fa-quran' },
  { label: 'Communauté solidaire', icon: 'fa-users' },
  { label: 'Équité pour tous', icon: 'fa-balance-scale' },
];
