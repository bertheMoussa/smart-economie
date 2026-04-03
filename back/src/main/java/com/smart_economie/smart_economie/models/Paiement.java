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
@Table(name = "paiements")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Paiement {
 
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idPaiement;
 
    private LocalDate dateEcheance;
    private float montant;
    private String modePaiement;
    private String statut;
    private LocalDate datePaiement;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sinistre_reference")
    private Sinistre sinistre;
 
    public void genererQuittance() {
        // Logique de génération de quittance
    }
 
    public boolean verifierImpaye() {
        return datePaiement == null && LocalDate.now().isAfter(dateEcheance);
    }
}
 
