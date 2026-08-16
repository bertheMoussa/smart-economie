import { http } from './http';
import type { Vehicule, VehiculeCreate, VehiculeUpdate } from './types';

export const vehiculesApi = {
  getAll: () =>
    http.get<Vehicule[]>('/vehicules'),

  getByImmatriculation: (immatriculation: string) =>
    http.get<Vehicule>(`/vehicules/${encodeURIComponent(immatriculation)}`),

  getByMarque: (marque: string) =>
    http.get<Vehicule[]>(`/vehicules/marque/${encodeURIComponent(marque)}`),

  search: (marque: string, modele?: string) => {
    const params = new URLSearchParams({ marque });
    if (modele) params.set('modele', modele);
    return http.get<Vehicule[]>(`/vehicules/search?${params}`);
  },

  getByAnneeMin: (annee: number) =>
    http.get<Vehicule[]>(`/vehicules/annee?annee=${annee}`),

  create: (data: VehiculeCreate) =>
    http.post<Vehicule>('/vehicules', data),

  update: (immatriculation: string, data: VehiculeUpdate) =>
    http.put<Vehicule>(`/vehicules/${encodeURIComponent(immatriculation)}`, data),

  delete: (immatriculation: string) =>
    http.delete<void>(`/vehicules/${encodeURIComponent(immatriculation)}`),
};
