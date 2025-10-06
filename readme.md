# Portfolio de Quentin VIEVARD

Site portfolio de **Quentin VIEVARD**, développeur web et logiciel, présentant ses compétences, projets et parcours académique.

---

## Table des matières

- [Présentation](#présentation)  
- [Fonctionnalités principales](#fonctionnalités-principales)  
- [Technologies utilisées](#technologies-utilisées)  
- [Structure du projet](#structure-du-projet)  
- [Accessibilité et UX](#accessibilité-et-ux)  
- [Installation et déploiement](#installation-et-déploiement)  
- [Contact](#contact)  

---

## Présentation

Le portfolio a pour objectif de mettre en valeur les compétences techniques et les projets de Quentin VIEVARD. Il est conçu comme un site **one-page responsive**, accessible, rapide et agréable à utiliser.

---

## Fonctionnalités principales

### 1. Thème clair / sombre
- Basculable via le bouton `🌓` dans le header.
- Préférence sauvegardée dans `localStorage`.
- Détection automatique du thème préféré du système si aucune préférence n’est enregistrée.

### 2. Menu burger pour mobile
- Menu de navigation caché sur les petits écrans.
- Bouton hamburger interactif avec état ARIA pour l’accessibilité.
- Fermeture automatique du menu lors du clic sur un lien.

### 3. Défilement fluide pour les liens internes
- Tous les liens internes (`<a href="#section">`) déclenchent un **scroll progressif** jusqu’à la section ciblée.
- Focus temporaire sur la section cible pour améliorer l’**accessibilité clavier et lecteur d’écran**.

### 4. Bouton "Retour en haut"
- Affiché dès que l’utilisateur scroll à plus de 300px.
- Défilement fluide jusqu’au haut de la page.
- Focus placé sur la section `#hero` après le scroll.

### 5. Sélecteur de langue
- Switch entre français (`index.html`) et anglais (`index-en.html`).
- Indication visuelle sur le drapeau actif.
- Transition légère pour le contenu lors du changement de langue.

### 6. Portfolio et sections
- **Hero** : Photo, nom, rôle et actions principales (Voir projets / Contact).  
- **À propos / About** : Présentation personnelle et compétences transversales.  
- **Parcours & Compétences / Experience & Skills** :
  - Formation (Licence Informatique, Baccalauréat) avec détails des spécialités et options.  
  - Compétences techniques sous forme de badges.
- **Projets sélectionnés / Selected Projects** :
  - Cartes de projets avec image, description, technologies utilisées et lien GitHub.  
- **CTA / Contact** : Boutons pour mail et téléchargement du CV.

### 7. Responsive & Mobile-first
- Grilles adaptatives (`cards-grid`, `projects-grid`) selon la largeur d’écran.
- Menu hamburger et ajustement des images sur mobile.
- Flexibilité pour écrans moyens et grands (≥720px).

### 8. Accessibilité
- Lien "Passer au contenu" (`.skip-link`).
- Focus visible sur tous les liens et boutons (`:focus`).
- ARIA labels sur les boutons, menus et navigation.
- Focus temporaire pour le défilement fluide.

---

## Technologies utilisées

- **HTML5** et **CSS3** (Flexbox, Grid, variables CSS, transitions).
- **JavaScript vanilla** pour :
  - Thème dynamique.
  - Menu mobile interactif.
  - Défilement fluide et bouton "Retour en haut".
- **Google Fonts** (`Poppins`).
- SEO et Open Graph pour réseaux sociaux.
- Responsive design mobile-first.

---

## Structure du projet
portfolio/
│
├─ index.html #Version française
├─ index-en.html #Version anglaise
├─ style/
│ └─ style.css #Styles globaux, responsive et thèmes
├─ comportement/
│ └─ main.js #JS : thème, menu, scroll, bouton haut
├─ images/ #Photos, icônes, captures projets
└─ docs/
└─ CV_VIEVARD_Quentin.pdf

---

## Accessibilité et UX

- Navigation claire avec focus visible et ARIA attributes.
- Défilement fluide pour éviter les sauts brusques.
- Contraste suffisant pour thème clair et sombre.
- Utilisation de badges et grilles pour structurer le contenu.
- Mobile-first pour une expérience optimale sur smartphones et tablettes.

---

## Contact

Email : quentin.vvd@gmail.com
LinkedIn : linkedin.com/in/quentin-vievard-9172b2332
GitHub : github.com/VIEVARD-Quentin
