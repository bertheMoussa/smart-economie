import { http } from './http';
import type { Client, ClientCreate, ClientUpdate } from './types';

export const clientsApi = {
  getAll: () =>
    http.get<Client[]>('/clients'),

  getById: (id: number) =>
    http.get<Client>(`/clients/${id}`),

  getByEmail: (email: string) =>
    http.get<Client>(`/clients/email/${encodeURIComponent(email)}`),

  search: (nom: string) =>
    http.get<Client[]>(`/clients/search?nom=${encodeURIComponent(nom)}`),

  create: (data: ClientCreate) =>
    http.post<Client>('/clients', data),

  update: (id: number, data: ClientUpdate) =>
    http.put<Client>(`/clients/${id}`, data),

  delete: (id: number) =>
    http.delete<void>(`/clients/${id}`),
};
