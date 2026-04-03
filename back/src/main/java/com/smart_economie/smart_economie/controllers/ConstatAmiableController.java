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

import com.smart_economie.smart_economie.models.ConstatAmiable;
import com.smart_economie.smart_economie.services.ConstatAmiableService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/constats")
@RequiredArgsConstructor
public class ConstatAmiableController {

    private final ConstatAmiableService constatService;

    @GetMapping
    public ResponseEntity<List<ConstatAmiable>> findAll() {
        return ResponseEntity.ok(constatService.findAll());
    }

    @GetMapping("/{numero}")
    public ResponseEntity<ConstatAmiable> findById(@PathVariable String numero) {
        return ResponseEntity.ok(constatService.findById(numero));
    }

    @GetMapping("/sinistre/{sinistreReference}")
    public ResponseEntity<ConstatAmiable> findBySinistre(@PathVariable String sinistreReference) {
        return ResponseEntity.ok(constatService.findBySinistre(sinistreReference));
    }

    @PostMapping
    public ResponseEntity<ConstatAmiable> save(@RequestBody ConstatAmiable constat) {
        return ResponseEntity.status(HttpStatus.CREATED).body(constatService.save(constat));
    }

    @PutMapping("/{numero}")
    public ResponseEntity<ConstatAmiable> update(
            @PathVariable String numero,
            @RequestBody ConstatAmiable constat) {
        return ResponseEntity.ok(constatService.update(numero, constat));
    }

    @DeleteMapping("/{numero}")
    public ResponseEntity<Void> delete(@PathVariable String numero) {
        constatService.delete(numero);
        return ResponseEntity.noContent().build();
    }
}
