package com.smart_economie.smart_economie.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.Temoignage;

@Repository
public interface TemoignageRepository extends JpaRepository<Temoignage, String> {

    List<Temoignage> findBySinistreReference(String sinistreReference);
}
