package com.smart_economie.smart_economie.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smart_economie.smart_economie.models.Sinistre;
import com.smart_economie.smart_economie.services.SinistreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/sinistres")
@RequiredArgsConstructor
public class SinistreController {

    private final SinistreService sinistreService;

    @GetMapping
    public ResponseEntity<List<Sinistre>> findAll() {
        return ResponseEntity.ok(sinistreService.findAll());
    }

    @GetMapping("/{reference}")
    public ResponseEntity<Sinistre> findById(@PathVariable String reference) {
        return ResponseEntity.ok(sinistreService.findById(reference));
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Sinistre>> findByClient(@PathVariable String clientId) {
        return ResponseEntity.ok(sinistreService.findByClientId(clientId));
    }

    @GetMapping("/contrat/{numeroContrat}")
    public ResponseEntity<List<Sinistre>> findByContrat(@PathVariable String numeroContrat) {
        return ResponseEntity.ok(sinistreService.findByContrat(numeroContrat));
    }

    @GetMapping("/statut/{statut}")
    public ResponseEntity<List<Sinistre>> findByStatut(@PathVariable String statut) {
        return ResponseEntity.ok(sinistreService.findByStatut(statut));
    }

    @GetMapping("/periode")
    public ResponseEntity<List<Sinistre>> findByPeriode(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate debut,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fin) {
        return ResponseEntity.ok(sinistreService.findByPeriode(debut, fin));
    }

    @PostMapping
    public ResponseEntity<Sinistre> save(@RequestBody Sinistre sinistre) {
        return ResponseEntity.status(HttpStatus.CREATED).body(sinistreService.save(sinistre));
    }

    @PutMapping("/{reference}")
    public ResponseEntity<Sinistre> update(
            @PathVariable String reference,
            @RequestBody Sinistre sinistre) {
        return ResponseEntity.ok(sinistreService.update(reference, sinistre));
    }

    @PatchMapping("/{reference}/expertiser")
    public ResponseEntity<Sinistre> expertiser(@PathVariable String reference) {
        return ResponseEntity.ok(sinistreService.expertiser(reference));
    }

    @PatchMapping("/{reference}/indemniser")
    public ResponseEntity<Sinistre> indemniser(@PathVariable String reference) {
        return ResponseEntity.ok(sinistreService.indemniser(reference));
    }

    @DeleteMapping("/{reference}")
    public ResponseEntity<Void> delete(@PathVariable String reference) {
        sinistreService.delete(reference);
        return ResponseEntity.noContent().build();
    }
}
