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

import com.smart_economie.smart_economie.models.Paiement;
import com.smart_economie.smart_economie.services.PaiementService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/paiements")
@RequiredArgsConstructor
public class PaiementController {

    private final PaiementService paiementService;

    @GetMapping
    public ResponseEntity<List<Paiement>> findAll() {
        return ResponseEntity.ok(paiementService.findAll());
    }

    @GetMapping("/{idPaiement}")
    public ResponseEntity<Paiement> findById(@PathVariable String idPaiement) {
        return ResponseEntity.ok(paiementService.findById(idPaiement));
    }

    @GetMapping("/sinistre/{sinistreReference}")
    public ResponseEntity<List<Paiement>> findBySinistre(@PathVariable String sinistreReference) {
        return ResponseEntity.ok(paiementService.findBySinistre(sinistreReference));
    }

    @GetMapping("/statut/{statut}")
    public ResponseEntity<List<Paiement>> findByStatut(@PathVariable String statut) {
        return ResponseEntity.ok(paiementService.findByStatut(statut));
    }

    @GetMapping("/impayes")
    public ResponseEntity<List<Paiement>> findImpayes() {
        return ResponseEntity.ok(paiementService.findImpayes());
    }

    @PostMapping
    public ResponseEntity<Paiement> save(@RequestBody Paiement paiement) {
        return ResponseEntity.status(HttpStatus.CREATED).body(paiementService.save(paiement));
    }

    @PutMapping("/{idPaiement}")
    public ResponseEntity<Paiement> update(
            @PathVariable String idPaiement,
            @RequestBody Paiement paiement) {
        return ResponseEntity.ok(paiementService.update(idPaiement, paiement));
    }

    @PatchMapping("/{idPaiement}/valider")
    public ResponseEntity<Paiement> valider(@PathVariable String idPaiement) {
        return ResponseEntity.ok(paiementService.validerPaiement(idPaiement));
    }

    @DeleteMapping("/{idPaiement}")
    public ResponseEntity<Void> delete(@PathVariable String idPaiement) {
        paiementService.delete(idPaiement);
        return ResponseEntity.noContent().build();
    }
}
