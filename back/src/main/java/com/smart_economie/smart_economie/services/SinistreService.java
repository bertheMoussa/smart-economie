package com.smart_economie.smart_economie.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.Client;
import com.smart_economie.smart_economie.models.ContratAssurance;
import com.smart_economie.smart_economie.models.Sinistre;
import com.smart_economie.smart_economie.repositories.SinistreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class SinistreService {

    private final SinistreRepository sinistreRepository;
    private final ClientService clientService;
    private final ContratAssuranceService contratService;

    public List<Sinistre> findAll() {
        return sinistreRepository.findAll();
    }

    public Sinistre findById(String reference) {
        return sinistreRepository.findById(reference)
                .orElseThrow(() -> new RuntimeException("Sinistre non trouvé avec la référence : " + reference));
    }

    public List<Sinistre> findByClientId(String clientId) {
        return sinistreRepository.findByClientId(clientId);
    }

    public List<Sinistre> findByContrat(String numeroContrat) {
        return sinistreRepository.findByContratNumeroContrat(numeroContrat);
    }

    public List<Sinistre> findByStatut(String statut) {
        return sinistreRepository.findByStatut(statut);
    }

    public List<Sinistre> findByPeriode(LocalDate debut, LocalDate fin) {
        return sinistreRepository.findByDateDeclarationBetween(debut, fin);
    }

    public Sinistre save(Sinistre sinistre) {
        Client client = clientService.findById(sinistre.getClient().getId());
        ContratAssurance contrat = contratService.findById(sinistre.getContrat().getNumeroContrat());

        if (!contrat.verifierValidite()) {
            throw new RuntimeException("Le contrat n°" + contrat.getNumeroContrat() + " n'est pas actif");
        }

        sinistre.setClient(client);
        sinistre.setContrat(contrat);
        sinistre.setDateDeclaration(LocalDate.now());
        sinistre.setStatut("DECLARE");
        return sinistreRepository.save(sinistre);
    }

    public Sinistre update(String reference, Sinistre sinistreDetails) {
        Sinistre sinistre = findById(reference);
        sinistre.setDateEvenement(sinistreDetails.getDateEvenement());
        sinistre.setLieu(sinistreDetails.getLieu());
        sinistre.setDescription(sinistreDetails.getDescription());
        sinistre.setMontantEstime(sinistreDetails.getMontantEstime());
        sinistre.setResponsabilite(sinistreDetails.getResponsabilite());
        sinistre.setStatut(sinistreDetails.getStatut());
        return sinistreRepository.save(sinistre);
    }

    public Sinistre expertiser(String reference) {
        Sinistre sinistre = findById(reference);
        sinistre.expertiser();
        return sinistreRepository.save(sinistre);
    }

    public Sinistre indemniser(String reference) {
        Sinistre sinistre = findById(reference);
        sinistre.indemniser();
        return sinistreRepository.save(sinistre);
    }

    public void delete(String reference) {
        Sinistre sinistre = findById(reference);
        sinistreRepository.delete(sinistre);
    }

    public boolean existsById(String reference) {
        return sinistreRepository.existsById(reference);
    }
}
