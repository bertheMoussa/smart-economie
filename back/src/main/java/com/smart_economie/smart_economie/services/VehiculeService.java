package com.smart_economie.smart_economie.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smart_economie.smart_economie.models.Vehicule;
import com.smart_economie.smart_economie.repositories.VehiculeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class VehiculeService {

    private final VehiculeRepository vehiculeRepository;

    public List<Vehicule> findAll() {
        return vehiculeRepository.findAll();
    }

    public Vehicule findById(String immatriculation) {
        return vehiculeRepository.findById(immatriculation)
                .orElseThrow(() -> new RuntimeException("Véhicule non trouvé avec l'immatriculation : " + immatriculation));
    }

    public List<Vehicule> findByMarque(String marque) {
        return vehiculeRepository.findByMarque(marque);
    }

    public List<Vehicule> findByMarqueAndModele(String marque, String modele) {
        return vehiculeRepository.findByMarqueAndModele(marque, modele);
    }

    public List<Vehicule> findByAnneeMinimum(int annee) {
        return vehiculeRepository.findByAnneeGreaterThanEqual(annee);
    }

    public Vehicule save(Vehicule vehicule) {
        if (vehiculeRepository.existsById(vehicule.getImmatriculation())) {
            throw new RuntimeException("Un véhicule avec l'immatriculation " + vehicule.getImmatriculation() + " existe déjà");
        }
        return vehiculeRepository.save(vehicule);
    }

    public Vehicule update(String immatriculation, Vehicule vehiculeDetails) {
        Vehicule vehicule = findById(immatriculation);
        vehicule.setMarque(vehiculeDetails.getMarque());
        vehicule.setModele(vehiculeDetails.getModele());
        vehicule.setAnnee(vehiculeDetails.getAnnee());
        vehicule.setPuissanceCV(vehiculeDetails.getPuissanceCV());
        vehicule.setValeurNeuve(vehiculeDetails.getValeurNeuve());
        vehicule.setTypeCarburant(vehiculeDetails.getTypeCarburant());
        vehicule.setDateMiseEnCirculation(vehiculeDetails.getDateMiseEnCirculation());
        return vehiculeRepository.save(vehicule);
    }

    public void delete(String immatriculation) {
        Vehicule vehicule = findById(immatriculation);
        vehiculeRepository.delete(vehicule);
    }

    public boolean existsById(String immatriculation) {
        return vehiculeRepository.existsById(immatriculation);
    }
}
