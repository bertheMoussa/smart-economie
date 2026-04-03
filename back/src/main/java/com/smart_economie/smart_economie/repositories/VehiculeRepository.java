package com.smart_economie.smart_economie.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.Vehicule;

@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule, String> {

    List<Vehicule> findByMarque(String marque);
    List<Vehicule> findByMarqueAndModele(String marque, String modele);
    List<Vehicule> findByAnneeGreaterThanEqual(int annee);
}
