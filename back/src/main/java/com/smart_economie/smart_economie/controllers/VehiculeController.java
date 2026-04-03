package com.smart_economie.smart_economie.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smart_economie.smart_economie.models.Vehicule;
import com.smart_economie.smart_economie.services.VehiculeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/vehicules")
@RequiredArgsConstructor
public class VehiculeController {

    private final VehiculeService vehiculeService;

    @GetMapping
    public ResponseEntity<List<Vehicule>> findAll() {
        return ResponseEntity.ok(vehiculeService.findAll());
    }

    @GetMapping("/{immatriculation}")
    public ResponseEntity<Vehicule> findById(@PathVariable String immatriculation) {
        return ResponseEntity.ok(vehiculeService.findById(immatriculation));
    }

    @GetMapping("/marque/{marque}")
    public ResponseEntity<List<Vehicule>> findByMarque(@PathVariable String marque) {
        return ResponseEntity.ok(vehiculeService.findByMarque(marque));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Vehicule>> findByMarqueAndModele(
            @RequestParam String marque,
            @RequestParam String modele) {
        return ResponseEntity.ok(vehiculeService.findByMarqueAndModele(marque, modele));
    }

    @GetMapping("/annee")
    public ResponseEntity<List<Vehicule>> findByAnneeMinimum(@RequestParam int annee) {
        return ResponseEntity.ok(vehiculeService.findByAnneeMinimum(annee));
    }

    @PostMapping
    public ResponseEntity<Vehicule> save(@RequestBody Vehicule vehicule) {
        return ResponseEntity.status(HttpStatus.CREATED).body(vehiculeService.save(vehicule));
    }

    @PutMapping("/{immatriculation}")
    public ResponseEntity<Vehicule> update(
            @PathVariable String immatriculation,
            @RequestBody Vehicule vehicule) {
        return ResponseEntity.ok(vehiculeService.update(immatriculation, vehicule));
    }

    @DeleteMapping("/{immatriculation}")
    public ResponseEntity<Void> delete(@PathVariable String immatriculation) {
        vehiculeService.delete(immatriculation);
        return ResponseEntity.noContent().build();
    }
}
