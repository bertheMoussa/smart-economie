import { http } from './http';
import type { Garantie, GarantieCreate, GarantieUpdate } from './types';

export const garantiesApi = {
  getAll: () =>
    http.get<Garantie[]>('/garanties'),

  getByCode: (code: string) =>
    http.get<Garantie>(`/garanties/${encodeURIComponent(code)}`),

  getByContrat: (numeroContrat: string) =>
    http.get<Garantie[]>(`/garanties/contrat/${encodeURIComponent(numeroContrat)}`),

  search: (libelle: string) =>
    http.get<Garantie[]>(`/garanties/search?libelle=${encodeURIComponent(libelle)}`),

  create: (data: GarantieCreate) =>
    http.post<Garantie>('/garanties', data),

  update: (code: string, data: GarantieUpdate) =>
    http.put<Garantie>(`/garanties/${encodeURIComponent(code)}`, data),

  delete: (code: string) =>
    http.delete<void>(`/garanties/${encodeURIComponent(code)}`),
};
