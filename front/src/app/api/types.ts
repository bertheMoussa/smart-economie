// ── Clients ──────────────────────────────────────────────────────────────────

export interface Client {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  adresse?: string;
  ville?: string;
  dateNaissance?: string;
  typeClient: 'PARTICULIER' | 'ENTREPRISE';
  raisonSociale?: string;
  numeroRC?: string;
  secteurActivite?: string;
}

export type ClientCreate = Omit<Client, 'id'>;
export type ClientUpdate = Partial<ClientCreate>;

// ── Véhicules ─────────────────────────────────────────────────────────────────

export interface Vehicule {
  immatriculation: string;
  marque: string;
  modele: string;
  annee: number;
  puissanceFiscale?: number;
  valeurVenale?: number;
  typeVehicule?: string;
  clientId: number;
}

export type VehiculeCreate = Vehicule;
export type VehiculeUpdate = Partial<Omit<Vehicule, 'immatriculation'>>;

// ── Contrats ──────────────────────────────────────────────────────────────────

export type StatutContrat = 'ACTIF' | 'RESILIE' | 'EXPIRE' | 'EN_ATTENTE';
export type FormulaContrat = 'TIERS_SIMPLE' | 'TIERS_ETENDU' | 'TOUS_RISQUES';

export interface Contrat {
  numeroContrat: string;
  clientId: number;
  immatriculation: string;
  formule: FormulaContrat;
  statut: StatutContrat;
  dateDebut: string;
  dateFin: string;
  dateCreation?: string;
}

export type ContratCreate = Omit<Contrat, 'numeroContrat' | 'dateCreation'>;
export type ContratUpdate = Partial<Omit<ContratCreate, 'clientId'>>;

// ── Garanties ─────────────────────────────────────────────────────────────────

export interface Garantie {
  code: string;
  libelle: string;
  description?: string;
  plafond?: number;
  franchise?: number;
  numeroContrat: string;
}

export type GarantieCreate = Garantie;
export type GarantieUpdate = Partial<Omit<Garantie, 'code'>>;

// ── Sinistres ─────────────────────────────────────────────────────────────────

export type StatutSinistre =
  | 'DECLARE'
  | 'EN_EXPERTISE'
  | 'EN_INDEMNISATION'
  | 'CLOTURE'
  | 'REFUSE';

export interface Sinistre {
  reference: string;
  clientId: number;
  numeroContrat: string;
  dateSinistre: string;
  lieuSinistre?: string;
  description: string;
  statut: StatutSinistre;
  montantEstime?: number;
  montantIndemnise?: number;
  dateDeclaration?: string;
}

export type SinistreCreate = Omit<Sinistre, 'reference' | 'statut' | 'dateDeclaration'>;
export type SinistreUpdate = Partial<Omit<SinistreCreate, 'clientId' | 'numeroContrat'>>;

// ── Paiements ─────────────────────────────────────────────────────────────────

export type StatutPaiement = 'EN_ATTENTE' | 'VALIDE' | 'REFUSE' | 'REMBOURSE';
export type ModePaiement = 'VIREMENT' | 'CHEQUE' | 'ESPECES' | 'CARTE';

export interface Paiement {
  idPaiement: number;
  sinistreReference: string;
  montant: number;
  statut: StatutPaiement;
  modePaiement?: ModePaiement;
  dateCreation?: string;
  dateValidation?: string;
}

export type PaiementCreate = Omit<Paiement, 'idPaiement' | 'statut' | 'dateCreation' | 'dateValidation'>;
export type PaiementUpdate = Partial<Omit<PaiementCreate, 'sinistreReference'>>;

// ── Constats amiables ─────────────────────────────────────────────────────────

export interface Constat {
  numero: string;
  sinistreReference: string;
  dateConstat: string;
  lieuConstat?: string;
  conducteurAdverse?: string;
  vehiculeAdverse?: string;
  descriptionCirconstances?: string;
}

export type ConstatCreate = Omit<Constat, 'numero'>;
export type ConstatUpdate = Partial<Omit<ConstatCreate, 'sinistreReference'>>;

// ── Témoignages ───────────────────────────────────────────────────────────────

export interface Temoignage {
  id: number;
  sinistreReference: string;
  nom: string;
  prenom: string;
  telephone?: string;
  declaration: string;
  dateDeclaration?: string;
}

export type TemoignageCreate = Omit<Temoignage, 'id' | 'dateDeclaration'>;
export type TemoignageUpdate = Partial<Omit<TemoignageCreate, 'sinistreReference'>>;
