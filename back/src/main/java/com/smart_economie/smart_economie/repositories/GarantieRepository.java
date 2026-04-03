package com.smart_economie.smart_economie.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.Garantie;

@Repository
public interface GarantieRepository extends JpaRepository<Garantie, String> {

    List<Garantie> findByContratNumeroContrat(String numeroContrat);
    List<Garantie> findByLibelleContainingIgnoreCase(String libelle);
}
