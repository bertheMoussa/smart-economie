package com.smart_economie.smart_economie.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.ConstatAmiable;

@Repository
public interface ConstatAmiableRepository extends JpaRepository<ConstatAmiable, String> {

    Optional<ConstatAmiable> findBySinistreReference(String sinistreReference);
    boolean existsBySinistreReference(String sinistreReference);
}
