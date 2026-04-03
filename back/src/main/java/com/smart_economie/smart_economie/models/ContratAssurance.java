package com.smart_economie.smart_economie.models;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;
 
@Entity
@Table(name = "contrats_assurance")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ContratAssurance {
 
    @Id
    private String numeroContrat;
 
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private float primeAnnuelle;
    private String statut;
    private float franchise;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client client;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicule_immatriculation")
    private Vehicule vehicule;
 
    @OneToMany(mappedBy = "contrat", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Garantie> garanties;
 
    @OneToMany(mappedBy = "contrat", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Sinistre> sinistres;
 
    public float calculerPrime() {
        // Logique de calcul de prime
        return primeAnnuelle;
    }
 
    public boolean verifierValidite() {
        LocalDate today = LocalDate.now();
        return dateDebut != null && dateFin != null
                && !today.isBefore(dateDebut) && !today.isAfter(dateFin);
    }
 
    public void resilier() {
        this.statut = "RESILIE";
        this.dateFin = LocalDate.now();
    }
}
 