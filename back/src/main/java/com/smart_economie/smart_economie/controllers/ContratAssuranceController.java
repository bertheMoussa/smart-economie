package com.smart_economie.smart_economie.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart_economie.smart_economie.models.ContratAssurance;
import com.smart_economie.smart_economie.services.ContratAssuranceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/contrats")
@RequiredArgsConstructor
public class ContratAssuranceController {

    private final ContratAssuranceService contratService;

    @GetMapping
    public ResponseEntity<List<ContratAssurance>> findAll() {
        return ResponseEntity.ok(contratService.findAll());
    }

    @GetMapping("/{numeroContrat}")
    public ResponseEntity<ContratAssurance> findById(@PathVariable String numeroContrat) {
        return ResponseEntity.ok(contratService.findById(numeroContrat));
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<ContratAssurance>> findByClient(@PathVariable String clientId) {
        return ResponseEntity.ok(contratService.findByClientId(clientId));
    }

    @GetMapping("/statut/{statut}")
    public ResponseEntity<List<ContratAssurance>> findByStatut(@PathVariable String statut) {
        return ResponseEntity.ok(contratService.findByStatut(statut));
    }

    @GetMapping("/vehicule/{immatriculation}")
    public ResponseEntity<List<ContratAssurance>> findByVehicule(@PathVariable String immatriculation) {
        return ResponseEntity.ok(contratService.findByVehicule(immatriculation));
    }

    @GetMapping("/expires")
    public ResponseEntity<List<ContratAssurance>> findContratsExpires() {
        return ResponseEntity.ok(contratService.findContratsExpires());
    }

    @PostMapping
    public ResponseEntity<ContratAssurance> save(@RequestBody ContratAssurance contrat) {
        return ResponseEntity.status(HttpStatus.CREATED).body(contratService.save(contrat));
    }

    @PutMapping("/{numeroContrat}")
    public ResponseEntity<ContratAssurance> update(
            @PathVariable String numeroContrat,
            @RequestBody ContratAssurance contrat) {
        return ResponseEntity.ok(contratService.update(numeroContrat, contrat));
    }

    @PatchMapping("/{numeroContrat}/resilier")
    public ResponseEntity<ContratAssurance> resilier(@PathVariable String numeroContrat) {
        return ResponseEntity.ok(contratService.resilier(numeroContrat));
    }

    @DeleteMapping("/{numeroContrat}")
    public ResponseEntity<Void> delete(@PathVariable String numeroContrat) {
        contratService.delete(numeroContrat);
        return ResponseEntity.noContent().build();
    }
}
