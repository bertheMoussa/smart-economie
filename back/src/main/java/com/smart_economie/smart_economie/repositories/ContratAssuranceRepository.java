package com.smart_economie.smart_economie.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.ContratAssurance;

@Repository
public interface ContratAssuranceRepository extends JpaRepository<ContratAssurance, String> {

    List<ContratAssurance> findByClientId(String clientId);
    List<ContratAssurance> findByStatut(String statut);
    List<ContratAssurance> findByVehiculeImmatriculation(String immatriculation);
    List<ContratAssurance> findByDateFinBefore(LocalDate date);
    boolean existsByVehiculeImmatriculationAndStatut(String immatriculation, String statut);
}
