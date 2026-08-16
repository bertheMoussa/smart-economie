import { http } from './http';
import type { Paiement, PaiementCreate, PaiementUpdate, StatutPaiement } from './types';

export const paiementsApi = {
  getAll: () =>
    http.get<Paiement[]>('/paiements'),

  getById: (idPaiement: number) =>
    http.get<Paiement>(`/paiements/${idPaiement}`),

  getBySinistre: (sinistreReference: string) =>
    http.get<Paiement[]>(`/paiements/sinistre/${encodeURIComponent(sinistreReference)}`),

  getByStatut: (statut: StatutPaiement) =>
    http.get<Paiement[]>(`/paiements/statut/${statut}`),

  getImpayes: () =>
    http.get<Paiement[]>('/paiements/impayes'),

  create: (data: PaiementCreate) =>
    http.post<Paiement>('/paiements', data),

  update: (idPaiement: number, data: PaiementUpdate) =>
    http.put<Paiement>(`/paiements/${idPaiement}`, data),

  valider: (idPaiement: number) =>
    http.patch<Paiement>(`/paiements/${idPaiement}/valider`),

  delete: (idPaiement: number) =>
    http.delete<void>(`/paiements/${idPaiement}`),
};
