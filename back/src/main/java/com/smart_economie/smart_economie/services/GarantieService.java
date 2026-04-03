package com.smart_economie.smart_economie.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.ContratAssurance;
import com.smart_economie.smart_economie.models.Garantie;
import com.smart_economie.smart_economie.repositories.GarantieRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class GarantieService {

    private final GarantieRepository garantieRepository;
    private final ContratAssuranceService contratService;

    public List<Garantie> findAll() {
        return garantieRepository.findAll();
    }

    public Garantie findById(String code) {
        return garantieRepository.findById(code)
                .orElseThrow(() -> new RuntimeException("Garantie non trouvée avec le code : " + code));
    }

    public List<Garantie> findByContrat(String numeroContrat) {
        return garantieRepository.findByContratNumeroContrat(numeroContrat);
    }

    public List<Garantie> findByLibelle(String libelle) {
        return garantieRepository.findByLibelleContainingIgnoreCase(libelle);
    }

    public Garantie save(Garantie garantie) {
        ContratAssurance contrat = contratService.findById(garantie.getContrat().getNumeroContrat());
        garantie.setContrat(contrat);
        return garantieRepository.save(garantie);
    }

    public Garantie update(String code, Garantie garantieDetails) {
        Garantie garantie = findById(code);
        garantie.setLibelle(garantieDetails.getLibelle());
        garantie.setDescription(garantieDetails.getDescription());
        garantie.setTarifBase(garantieDetails.getTarifBase());
        garantie.setTauxMajoration(garantieDetails.getTauxMajoration());
        return garantieRepository.save(garantie);
    }

    public void delete(String code) {
        Garantie garantie = findById(code);
        garantieRepository.delete(garantie);
    }

    public boolean existsById(String code) {
        return garantieRepository.existsById(code);
    }
}
