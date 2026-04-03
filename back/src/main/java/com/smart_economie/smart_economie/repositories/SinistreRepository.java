package com.smart_economie.smart_economie.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.Sinistre;

@Repository
public interface SinistreRepository extends JpaRepository<Sinistre, String> {

    List<Sinistre> findByClientId(String clientId);
    List<Sinistre> findByContratNumeroContrat(String numeroContrat);
    List<Sinistre> findByStatut(String statut);
    List<Sinistre> findByDateDeclarationBetween(LocalDate debut, LocalDate fin);
}
