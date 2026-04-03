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

import com.smart_economie.smart_economie.models.Garantie;
import com.smart_economie.smart_economie.services.GarantieService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/garanties")
@RequiredArgsConstructor
public class GarantieController {

    private final GarantieService garantieService;

    @GetMapping
    public ResponseEntity<List<Garantie>> findAll() {
        return ResponseEntity.ok(garantieService.findAll());
    }

    @GetMapping("/{code}")
    public ResponseEntity<Garantie> findById(@PathVariable String code) {
        return ResponseEntity.ok(garantieService.findById(code));
    }

    @GetMapping("/contrat/{numeroContrat}")
    public ResponseEntity<List<Garantie>> findByContrat(@PathVariable String numeroContrat) {
        return ResponseEntity.ok(garantieService.findByContrat(numeroContrat));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Garantie>> findByLibelle(@RequestParam String libelle) {
        return ResponseEntity.ok(garantieService.findByLibelle(libelle));
    }

    @PostMapping
    public ResponseEntity<Garantie> save(@RequestBody Garantie garantie) {
        return ResponseEntity.status(HttpStatus.CREATED).body(garantieService.save(garantie));
    }

    @PutMapping("/{code}")
    public ResponseEntity<Garantie> update(@PathVariable String code, @RequestBody Garantie garantie) {
        return ResponseEntity.ok(garantieService.update(code, garantie));
    }

    @DeleteMapping("/{code}")
    public ResponseEntity<Void> delete(@PathVariable String code) {
        garantieService.delete(code);
        return ResponseEntity.noContent().build();
    }
}
