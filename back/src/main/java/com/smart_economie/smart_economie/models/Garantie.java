package com.smart_economie.smart_economie.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
 
@Entity
@Table(name = "garanties")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Garantie {
 
    @Id
    private String code;
 
    private String libelle;
    private String description;
    private float tarifBase;
    private float tauxMajoration;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "contrat_numero")
    private ContratAssurance contrat;
 
    public boolean estObligatoire() {
        // Logique métier pour déterminer si la garantie est obligatoire
        return false;
    }
}