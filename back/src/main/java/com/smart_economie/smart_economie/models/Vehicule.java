package com.smart_economie.smart_economie.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
 
@Entity
@Table(name = "vehicules")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Vehicule {
 
    @Id
    private String immatriculation;
 
    private String marque;
    private String modele;
    private int annee;
    private int puissanceCV;
    private float valeurNeuve;
    private String typeCarburant;
    private LocalDate dateMiseEnCirculation;
 
    public int getAge() {
        return LocalDate.now().getYear() - annee;
    }
}
 