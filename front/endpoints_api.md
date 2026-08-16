# **Référence des Endpoints API**

Application : smart-economie  ·  Base URL : /api  ·  Total : 64 endpoints  ·  Ressources : 8

**Légende des méthodes HTTP :**

**GET**

Lire

**POST**

Créer

**PUT**

Modifier

**PATCH**

Action

**DELETE**

Supprimer

## **Clients**

Base : /clients  ·  7 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/clients

Lister tous les clients

**GET**

/clients/{id}

Trouver par ID

**GET**

/clients/email/{email}

Trouver par email

**GET**

/clients/search?nom=

Rechercher par nom

**POST**

/clients

Créer un client

**PUT**

/clients/{id}

Modifier un client

**DELETE**

/clients/{id}

Supprimer un client

## **Véhicules**

Base : /vehicules  ·  8 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/vehicules

Lister tous les véhicules

**GET**

/vehicules/{immatriculation}

Trouver par immatriculation

**GET**

/vehicules/marque/{marque}

Filtrer par marque

**GET**

/vehicules/search?marque=&modele=

Filtrer par marque + modèle

**GET**

/vehicules/annee?annee=

Filtrer par année minimum

**POST**

/vehicules

Créer un véhicule

**PUT**

/vehicules/{immatriculation}

Modifier un véhicule

**DELETE**

/vehicules/{immatriculation}

Supprimer un véhicule

## **Contrats d'assurance**

Base : /contrats  ·  10 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/contrats

Lister tous les contrats

**GET**

/contrats/{numeroContrat}

Trouver par numéro

**GET**

/contrats/client/{clientId}

Contrats d'un client

**GET**

/contrats/statut/{statut}

Filtrer par statut

**GET**

/contrats/vehicule/{immatriculation}

Contrats d'un véhicule

**GET**

/contrats/expires

Lister les contrats expirés

**POST**

/contrats

Créer un contrat

**PUT**

/contrats/{numeroContrat}

Modifier un contrat

**PATCH**

/contrats/{numeroContrat}/resilier

Résilier un contrat

**DELETE**

/contrats/{numeroContrat}

Supprimer un contrat

## **Garanties**

Base : /garanties  ·  7 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/garanties

Lister toutes les garanties

**GET**

/garanties/{code}

Trouver par code

**GET**

/garanties/contrat/{numeroContrat}

Garanties d'un contrat

**GET**

/garanties/search?libelle=

Rechercher par libellé

**POST**

/garanties

Créer une garantie

**PUT**

/garanties/{code}

Modifier une garantie

**DELETE**

/garanties/{code}

Supprimer une garantie

## **Sinistres**

Base : /sinistres  ·  11 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/sinistres

Lister tous les sinistres

**GET**

/sinistres/{reference}

Trouver par référence

**GET**

/sinistres/client/{clientId}

Sinistres d'un client

**GET**

/sinistres/contrat/{numeroContrat}

Sinistres d'un contrat

**GET**

/sinistres/statut/{statut}

Filtrer par statut

**GET**

/sinistres/periode?debut=&fin=

Filtrer par période

**POST**

/sinistres

Déclarer un sinistre

**PUT**

/sinistres/{reference}

Modifier un sinistre

**PATCH**

/sinistres/{reference}/expertiser

Passer en expertise

**PATCH**

/sinistres/{reference}/indemniser

Passer en indemnisation

**DELETE**

/sinistres/{reference}

Supprimer un sinistre

## **Paiements**

Base : /paiements  ·  9 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/paiements

Lister tous les paiements

**GET**

/paiements/{idPaiement}

Trouver par ID

**GET**

/paiements/sinistre/{sinistreReference}

Paiements d'un sinistre

**GET**

/paiements/statut/{statut}

Filtrer par statut

**GET**

/paiements/impayes

Lister les impayés

**POST**

/paiements

Créer un paiement

**PUT**

/paiements/{idPaiement}

Modifier un paiement

**PATCH**

/paiements/{idPaiement}/valider

Valider un paiement

**DELETE**

/paiements/{idPaiement}

Supprimer un paiement

## **Constats amiables**

Base : /constats  ·  6 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/constats

Lister tous les constats

**GET**

/constats/{numero}

Trouver par numéro

**GET**

/constats/sinistre/{sinistreReference}

Constat d'un sinistre

**POST**

/constats

Créer un constat

**PUT**

/constats/{numero}

Modifier un constat

**DELETE**

/constats/{numero}

Supprimer un constat

## **Témoignages**

Base : /temoignages  ·  6 routes

**Méthode**

**Endpoint**

**Description**

**GET**

/temoignages

Lister tous les témoignages

**GET**

/temoignages/{id}

Trouver par ID

**GET**

/temoignages/sinistre/{sinistreReference}

Témoignages d'un sinistre

**POST**

/temoignages

Créer un témoignage

**PUT**

/temoignages/{id}

Modifier un témoignage

**DELETE**

/temoignages/{id}

Supprimer un témoignage