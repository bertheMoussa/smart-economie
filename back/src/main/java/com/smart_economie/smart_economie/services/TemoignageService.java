package com.smart_economie.smart_economie.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.Sinistre;
import com.smart_economie.smart_economie.models.Temoignage;
import com.smart_economie.smart_economie.repositories.TemoignageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class TemoignageService {

    private final TemoignageRepository temoignageRepository;
    private final SinistreService sinistreService;

    public List<Temoignage> findAll() {
        return temoignageRepository.findAll();
    }

    public Temoignage findById(String id) {
        return temoignageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Témoignage non trouvé avec l'id : " + id));
    }

    public List<Temoignage> findBySinistre(String sinistreReference) {
        return temoignageRepository.findBySinistreReference(sinistreReference);
    }

    public Temoignage save(Temoignage temoignage) {
        Sinistre sinistre = sinistreService.findById(temoignage.getSinistre().getReference());
        temoignage.setSinistre(sinistre);
        temoignage.setDate(LocalDate.now());
        return temoignageRepository.save(temoignage);
    }

    public Temoignage update(String id, Temoignage temoignageDetails) {
        Temoignage temoignage = findById(id);
        temoignage.setNomTemoin(temoignageDetails.getNomTemoin());
        temoignage.setCoordonneesTemoin(temoignageDetails.getCoordonneesTemoin());
        temoignage.setContenu(temoignageDetails.getContenu());
        return temoignageRepository.save(temoignage);
    }

    public void delete(String id) {
        Temoignage temoignage = findById(id);
        temoignageRepository.delete(temoignage);
    }

    public boolean existsById(String id) {
        return temoignageRepository.existsById(id);
    }
}
