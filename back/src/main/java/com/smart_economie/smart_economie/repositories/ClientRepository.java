package com.smart_economie.smart_economie.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart_economie.smart_economie.models.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, String> {

    Optional<Client> findByEmail(String email);
    List<Client> findByNomContainingIgnoreCase(String nom);
    boolean existsByEmail(String email);
}
