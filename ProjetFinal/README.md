---
tags:
  - btech
  - session-46
---

# Présentation du projet HTML/CSS final

## Titre du projet

Le spectre électromagnétique

## Type de site

Informatif/explicatif/Vulgarisation scientifique

## Thème

Science

## Description des pages

### Éléments communs

- PAGE 1 D'ACCUEIL
  Navbar avec logo et liens des autres pages (acceuil, ondes courtes, ondes rapprochés)
  -footer mentions légales, crédits et sources, logo & faux réseaux sociaux
- Des facts intéressants sur les ondes
- Illustrations avec une mascotte type cartoon friendly

### Page d'accueil

**Rôle** : Explique très brievement les 6 ondes/rayons (radio, micro-ondes, infrarouge, uv, rayon x, gamma) avec des cards 3d
Un spectre basique de la lumière visible avec la mascotte "Nucly" que l'oeil humain ne voit pas 99% de la lumière.
En bas se trouve un bloc "au bout du spectre" qui explique de manière bref le spectre visible par l'homme.

**Éléments spécifiques** :

- Fond sombre sobre
- introduction simple des ondes sans passer par du détail, ne pas encombrer l'utilisateur avec du détail, si il souhaite connaitre d'avantage, le header pourra le guider vers ce qu'il désire lire (sois des détails sur les ondes soit des histoires fascinantes sur celles-ci)
  Le bloc "bout du spectre" est légèrement animé, le titre avec la carte holographique est également animé aussi.

### Page 2 Les Ondes

**Rôle** : Expliquer les ondes en détail.

**Éléments spécifiques** :

- 6 blocs pour les six rayons & ondes
- Les explications sont + détailés et chaques blocs ont une illustration unique avec la mascotte
  Le bloc des rayons X contient une légère animation fait à l'aide de JS où on peut passer la souris par dessus et appercevoir le squelette de la mascotte comme un effet radio. En responsive, cette animation est désactivé à l'aide de "if" car l'animation est dépandante du mouvement de souris.
- Quand la souris passe sur chacuns des blocs, une petite animation se joue, le h2 s'agrandit légèrement et une lumière bleue translucide se met en bas à gauche du bloc, mais cette animation est également désactivé sur mobile.

### Page 3 Le Saviez-Vous ?

**Rôle** : Des annectodes et fun facts sur les ondes

**Éléments spécifiques** :

- Des menus accordéons qui déroulent sur des infos, avec des fun facts assez niche sur le spectre électromagnétique.
- Les menus déroulants sont placés en échiquier, ils sont plus à titre informatif qu'illustratif
- En responsive mobile, les menus sont toujours déroulants mais sont placés l'un en dessous de l'autre.

## Consignes respectées

- [x] 3 pages
- [x] Responsive design
- [x] Mentions légales et crédits
- [x] Animations/transitions sur chaque page
- [x] Document de présentation
- [x] Accessibilité (couleurs, tailles, descriptions et crédits médias)
- [x] SEO

## Bonus / Améliorations

- Onglet Fun facts avec un menu déroulant [X]
- Toggle pour le thème sombre et clair [ ]
- Logo original [X]
- Effet Rayon-X quand on passe la souris par dessus la mascotte dans la page les ondes[X]
