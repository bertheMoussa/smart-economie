package com.smart_economie.smart_economie.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.Client;
import com.smart_economie.smart_economie.models.ContratAssurance;
import com.smart_economie.smart_economie.models.Vehicule;
import com.smart_economie.smart_economie.repositories.ContratAssuranceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ContratAssuranceService {

    private final ContratAssuranceRepository contratRepository;
    private final ClientService clientService;
    private final VehiculeService vehiculeService;

    public List<ContratAssurance> findAll() {
        return contratRepository.findAll();
    }

    public ContratAssurance findById(String numeroContrat) {
        return contratRepository.findById(numeroContrat)
                .orElseThrow(() -> new RuntimeException("Contrat non trouvé avec le numéro : " + numeroContrat));
    }

    public List<ContratAssurance> findByClientId(String clientId) {
        return contratRepository.findByClientId(clientId);
    }

    public List<ContratAssurance> findByStatut(String statut) {
        return contratRepository.findByStatut(statut);
    }

    public List<ContratAssurance> findByVehicule(String immatriculation) {
        return contratRepository.findByVehiculeImmatriculation(immatriculation);
    }

    public List<ContratAssurance> findContratsExpires() {
        return contratRepository.findByDateFinBefore(LocalDate.now());
    }

    public ContratAssurance save(ContratAssurance contrat) {
        // Vérification que le client existe
        Client client = clientService.findById(contrat.getClient().getId());
        // Vérification que le véhicule existe
        Vehicule vehicule = vehiculeService.findById(contrat.getVehicule().getImmatriculation());

        if (contratRepository.existsByVehiculeImmatriculationAndStatut(vehicule.getImmatriculation(), "ACTIF")) {
            throw new RuntimeException("Un contrat actif existe déjà pour ce véhicule");
        }

        contrat.setClient(client);
        contrat.setVehicule(vehicule);
        contrat.setStatut("ACTIF");
        return contratRepository.save(contrat);
    }

    public ContratAssurance update(String numeroContrat, ContratAssurance contratDetails) {
        ContratAssurance contrat = findById(numeroContrat);
        contrat.setDateDebut(contratDetails.getDateDebut());
        contrat.setDateFin(contratDetails.getDateFin());
        contrat.setPrimeAnnuelle(contratDetails.getPrimeAnnuelle());
        contrat.setStatut(contratDetails.getStatut());
        contrat.setFranchise(contratDetails.getFranchise());
        return contratRepository.save(contrat);
    }

    public ContratAssurance resilier(String numeroContrat) {
        ContratAssurance contrat = findById(numeroContrat);
        contrat.resilier();
        return contratRepository.save(contrat);
    }

    public void delete(String numeroContrat) {
        ContratAssurance contrat = findById(numeroContrat);
        contratRepository.delete(contrat);
    }

    public boolean existsById(String numeroContrat) {
        return contratRepository.existsById(numeroContrat);
    }
}
