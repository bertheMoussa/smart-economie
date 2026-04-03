package com.smart_economie.smart_economie.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.Paiement;

@Repository
public interface PaiementRepository extends JpaRepository<Paiement, String> {

    List<Paiement> findBySinistreReference(String sinistreReference);
    List<Paiement> findByStatut(String statut);
    List<Paiement> findByDateEcheanceBeforeAndDatePaiementIsNull(LocalDate date);
}
