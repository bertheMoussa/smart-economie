package com.smart_economie.smart_economie.models;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;
 
@Entity
@Table(name = "clients")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Client {
 
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
 
    private String nom;
    private String prenom;
    private LocalDate dateNaissance;
    private String adresse;
    private String email;
    private String telephone;
    private float coefficientBonusMalus;
    private LocalDate datePermis;
 
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ContratAssurance> contrats;
 
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Sinistre> sinistres;
 
    public int calculerAge() {
        if (dateNaissance == null) return 0;
        return LocalDate.now().getYear() - dateNaissance.getYear();
    }
 
    public void mettreAJourCoefficient() {
        // Logique métier de mise à jour du bonus-malus
    }
}