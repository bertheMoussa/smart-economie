package com.smart_economie.smart_economie.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "temoignages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Temoignage {
 
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
 
    private String nomTemoin;
    private String coordonneesTemoin;
    private String contenu;
    private LocalDate date;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sinistre_reference")
    private Sinistre sinistre;
}
 