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
import org.springframework.web.bind.annotation.RestController;

import com.smart_economie.smart_economie.models.Temoignage;
import com.smart_economie.smart_economie.services.TemoignageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/temoignages")
@RequiredArgsConstructor
public class TemoignageController {

    private final TemoignageService temoignageService;

    @GetMapping
    public ResponseEntity<List<Temoignage>> findAll() {
        return ResponseEntity.ok(temoignageService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Temoignage> findById(@PathVariable String id) {
        return ResponseEntity.ok(temoignageService.findById(id));
    }

    @GetMapping("/sinistre/{sinistreReference}")
    public ResponseEntity<List<Temoignage>> findBySinistre(@PathVariable String sinistreReference) {
        return ResponseEntity.ok(temoignageService.findBySinistre(sinistreReference));
    }

    @PostMapping
    public ResponseEntity<Temoignage> save(@RequestBody Temoignage temoignage) {
        return ResponseEntity.status(HttpStatus.CREATED).body(temoignageService.save(temoignage));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Temoignage> update(
            @PathVariable String id,
            @RequestBody Temoignage temoignage) {
        return ResponseEntity.ok(temoignageService.update(id, temoignage));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        temoignageService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
