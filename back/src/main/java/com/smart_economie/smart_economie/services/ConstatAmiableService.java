package com.smart_economie.smart_economie.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.ConstatAmiable;
import com.smart_economie.smart_economie.models.Sinistre;
import com.smart_economie.smart_economie.repositories.ConstatAmiableRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ConstatAmiableService {

    private final ConstatAmiableRepository constatRepository;
    private final SinistreService sinistreService;

    public List<ConstatAmiable> findAll() {
        return constatRepository.findAll();
    }

    public ConstatAmiable findById(String numero) {
        return constatRepository.findById(numero)
                .orElseThrow(() -> new RuntimeException("Constat amiable non trouvé avec le numéro : " + numero));
    }

    public ConstatAmiable findBySinistre(String sinistreReference) {
        return constatRepository.findBySinistreReference(sinistreReference)
                .orElseThrow(() -> new RuntimeException("Aucun constat pour le sinistre : " + sinistreReference));
    }

    public ConstatAmiable save(ConstatAmiable constat) {
        if (constatRepository.existsBySinistreReference(constat.getSinistre().getReference())) {
            throw new RuntimeException("Un constat amiable existe déjà pour ce sinistre");
        }
        Sinistre sinistre = sinistreService.findById(constat.getSinistre().getReference());
        constat.setSinistre(sinistre);
        constat.setDate(LocalDate.now());
        return constatRepository.save(constat);
    }

    public ConstatAmiable update(String numero, ConstatAmiable constatDetails) {
        ConstatAmiable constat = findById(numero);
        constat.setCirconstances(constatDetails.getCirconstances());
        constat.setCroquis(constatDetails.getCroquis());
        constat.setDegats(constatDetails.getDegats());
        constat.setSignatures(constatDetails.getSignatures());
        return constatRepository.save(constat);
    }

    public void delete(String numero) {
        ConstatAmiable constat = findById(numero);
        constatRepository.delete(constat);
    }

    public boolean existsById(String numero) {
        return constatRepository.existsById(numero);
    }
}
