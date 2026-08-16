import { http } from './http';
import type { Contrat, ContratCreate, ContratUpdate, StatutContrat } from './types';

export const contratsApi = {
  getAll: () =>
    http.get<Contrat[]>('/contrats'),

  getByNumero: (numeroContrat: string) =>
    http.get<Contrat>(`/contrats/${encodeURIComponent(numeroContrat)}`),

  getByClient: (clientId: number) =>
    http.get<Contrat[]>(`/contrats/client/${clientId}`),

  getByStatut: (statut: StatutContrat) =>
    http.get<Contrat[]>(`/contrats/statut/${statut}`),

  getByVehicule: (immatriculation: string) =>
    http.get<Contrat[]>(`/contrats/vehicule/${encodeURIComponent(immatriculation)}`),

  getExpires: () =>
    http.get<Contrat[]>('/contrats/expires'),

  create: (data: ContratCreate) =>
    http.post<Contrat>('/contrats', data),

  update: (numeroContrat: string, data: ContratUpdate) =>
    http.put<Contrat>(`/contrats/${encodeURIComponent(numeroContrat)}`, data),

  resilier: (numeroContrat: string) =>
    http.patch<Contrat>(`/contrats/${encodeURIComponent(numeroContrat)}/resilier`),

  delete: (numeroContrat: string) =>
    http.delete<void>(`/contrats/${encodeURIComponent(numeroContrat)}`),
};
