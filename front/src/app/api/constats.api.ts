import { http } from './http';
import type { Constat, ConstatCreate, ConstatUpdate } from './types';

export const constatsApi = {
  getAll: () =>
    http.get<Constat[]>('/constats'),

  getByNumero: (numero: string) =>
    http.get<Constat>(`/constats/${encodeURIComponent(numero)}`),

  getBySinistre: (sinistreReference: string) =>
    http.get<Constat>(`/constats/sinistre/${encodeURIComponent(sinistreReference)}`),

  create: (data: ConstatCreate) =>
    http.post<Constat>('/constats', data),

  update: (numero: string, data: ConstatUpdate) =>
    http.put<Constat>(`/constats/${encodeURIComponent(numero)}`, data),

  delete: (numero: string) =>
    http.delete<void>(`/constats/${encodeURIComponent(numero)}`),
};
