package com.smart_economie.smart_economie.models;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;
 
@Entity
@Table(name = "sinistres")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Sinistre {
 
    @Id
    private String reference;
 
    private LocalDate dateDeclaration;
    private LocalDate dateEvenement;
    private String lieu;
    private String description;
    private float montantEstime;
    private float responsabilite;
    private String statut;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client client;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "contrat_numero")
    private ContratAssurance contrat;
 
    @OneToMany(mappedBy = "sinistre", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Temoignage> temoignages;
 
    @OneToOne(mappedBy = "sinistre", cascade = CascadeType.ALL)
    private ConstatAmiable constatAmiable;
 
    @OneToMany(mappedBy = "sinistre", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Paiement> paiements;
 
    public void expertiser() {
        this.statut = "EN_EXPERTISE";
    }
 
    public void indemniser() {
        this.statut = "INDEMNISE";
    }
 
    public void determinerResponsabilite() {
        // Logique de détermination de responsabilité
    }
}