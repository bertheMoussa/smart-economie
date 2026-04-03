package com.smart_economie.smart_economie.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.Client;
import com.smart_economie.smart_economie.repositories.ClientRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ClientService {

    private final ClientRepository clientRepository;

    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    public Client findById(String id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client non trouvé avec l'id : " + id));
    }

    public Client findByEmail(String email) {
        return clientRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Client non trouvé avec l'email : " + email));
    }

    public List<Client> findByNom(String nom) {
        return clientRepository.findByNomContainingIgnoreCase(nom);
    }

    public Client save(Client client) {
        if (clientRepository.existsByEmail(client.getEmail())) {
            throw new RuntimeException("Un client avec l'email " + client.getEmail() + " existe déjà");
        }
        return clientRepository.save(client);
    }

    public Client update(String id, Client clientDetails) {
        Client client = findById(id);
        client.setNom(clientDetails.getNom());
        client.setPrenom(clientDetails.getPrenom());
        client.setDateNaissance(clientDetails.getDateNaissance());
        client.setAdresse(clientDetails.getAdresse());
        client.setEmail(clientDetails.getEmail());
        client.setTelephone(clientDetails.getTelephone());
        client.setCoefficientBonusMalus(clientDetails.getCoefficientBonusMalus());
        client.setDatePermis(clientDetails.getDatePermis());
        return clientRepository.save(client);
    }

    public void delete(String id) {
        Client client = findById(id);
        clientRepository.delete(client);
    }

    public boolean existsById(String id) {
        return clientRepository.existsById(id);
    }
}
