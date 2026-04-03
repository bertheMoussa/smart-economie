package com.smart_economie.smart_economie.models;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
 
@Entity
@Table(name = "constats_amiables")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ConstatAmiable {
 
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String numero;
 
    private LocalDate date;
    private String circonstances;
    private String croquis;
 
    @ElementCollection
    @CollectionTable(name = "constat_degats", joinColumns = @JoinColumn(name = "constat_id"))
    @Column(name = "degat")
    private List<String> degats;
 
    @ElementCollection
    @CollectionTable(name = "constat_signatures", joinColumns = @JoinColumn(name = "constat_id"))
    @Column(name = "signature")
    private List<String> signatures;
 
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sinistre_reference")
    private Sinistre sinistre;
 
    public byte[] genererPDF() {
        // Logique de génération du PDF
        return new byte[0];
    }
}