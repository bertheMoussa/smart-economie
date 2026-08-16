import { http } from './http';
import type { Sinistre, SinistreCreate, SinistreUpdate, StatutSinistre } from './types';

export const sinistresApi = {
  getAll: () =>
    http.get<Sinistre[]>('/sinistres'),

  getByReference: (reference: string) =>
    http.get<Sinistre>(`/sinistres/${encodeURIComponent(reference)}`),

  getByClient: (clientId: number) =>
    http.get<Sinistre[]>(`/sinistres/client/${clientId}`),

  getByContrat: (numeroContrat: string) =>
    http.get<Sinistre[]>(`/sinistres/contrat/${encodeURIComponent(numeroContrat)}`),

  getByStatut: (statut: StatutSinistre) =>
    http.get<Sinistre[]>(`/sinistres/statut/${statut}`),

  getByPeriode: (debut: string, fin: string) =>
    http.get<Sinistre[]>(`/sinistres/periode?debut=${debut}&fin=${fin}`),

  declarer: (data: SinistreCreate) =>
    http.post<Sinistre>('/sinistres', data),

  update: (reference: string, data: SinistreUpdate) =>
    http.put<Sinistre>(`/sinistres/${encodeURIComponent(reference)}`, data),

  expertiser: (reference: string) =>
    http.patch<Sinistre>(`/sinistres/${encodeURIComponent(reference)}/expertiser`),

  indemniser: (reference: string) =>
    http.patch<Sinistre>(`/sinistres/${encodeURIComponent(reference)}/indemniser`),

  delete: (reference: string) =>
    http.delete<void>(`/sinistres/${encodeURIComponent(reference)}`),
};
