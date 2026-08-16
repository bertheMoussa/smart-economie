import { http } from './http';
import type { Temoignage, TemoignageCreate, TemoignageUpdate } from './types';

export const temoignagesApi = {
  getAll: () =>
    http.get<Temoignage[]>('/temoignages'),

  getById: (id: number) =>
    http.get<Temoignage>(`/temoignages/${id}`),

  getBySinistre: (sinistreReference: string) =>
    http.get<Temoignage[]>(`/temoignages/sinistre/${encodeURIComponent(sinistreReference)}`),

  create: (data: TemoignageCreate) =>
    http.post<Temoignage>('/temoignages', data),

  update: (id: number, data: TemoignageUpdate) =>
    http.put<Temoignage>(`/temoignages/${id}`, data),

  delete: (id: number) =>
    http.delete<void>(`/temoignages/${id}`),
};
