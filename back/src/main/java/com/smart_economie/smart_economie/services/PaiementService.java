package com.smart_economie.smart_economie.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.Paiement;
import com.smart_economie.smart_economie.models.Sinistre;
import com.smart_economie.smart_economie.repositories.PaiementRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class PaiementService {

    private final PaiementRepository paiementRepository;
    private final SinistreService sinistreService;

    public List<Paiement> findAll() {
        return paiementRepository.findAll();
    }

    public Paiement findById(String idPaiement) {
        return paiementRepository.findById(idPaiement)
                .orElseThrow(() -> new RuntimeException("Paiement non trouvé avec l'id : " + idPaiement));
    }

    public List<Paiement> findBySinistre(String sinistreReference) {
        return paiementRepository.findBySinistreReference(sinistreReference);
    }

    public List<Paiement> findByStatut(String statut) {
        return paiementRepository.findByStatut(statut);
    }

    public List<Paiement> findImpayes() {
        return paiementRepository.findByDateEcheanceBeforeAndDatePaiementIsNull(LocalDate.now());
    }

    public Paiement save(Paiement paiement) {
        Sinistre sinistre = sinistreService.findById(paiement.getSinistre().getReference());
        paiement.setSinistre(sinistre);
        paiement.setStatut("EN_ATTENTE");
        return paiementRepository.save(paiement);
    }

    public Paiement update(String idPaiement, Paiement paiementDetails) {
        Paiement paiement = findById(idPaiement);
        paiement.setDateEcheance(paiementDetails.getDateEcheance());
        paiement.setMontant(paiementDetails.getMontant());
        paiement.setModePaiement(paiementDetails.getModePaiement());
        paiement.setStatut(paiementDetails.getStatut());
        paiement.setDatePaiement(paiementDetails.getDatePaiement());
        return paiementRepository.save(paiement);
    }

    public Paiement validerPaiement(String idPaiement) {
        Paiement paiement = findById(idPaiement);
        paiement.setDatePaiement(LocalDate.now());
        paiement.setStatut("PAYE");
        return paiementRepository.save(paiement);
    }

    public void delete(String idPaiement) {
        Paiement paiement = findById(idPaiement);
        paiementRepository.delete(paiement);
    }

    public boolean existsById(String idPaiement) {
        return paiementRepository.existsById(idPaiement);
    }
}
