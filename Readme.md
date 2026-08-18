# Mes projets Git — Jenet Tsopkeng

Mes Projet GIT one-page en **HTML / CSS / JavaScript vanilla**, sans framework ni dépendance à installer. Il présente une page d'accueil animée, une grille de projets, et un lien direct vers GitHub.

## Aperçu

- Nom affiché avec une animation lettre par lettre
- Halo violet qui suit le curseur en arrière-plan
- Bouton "Explorer mon GitHub" en dégradé
- Grille de cartes projets (nom, description, langage, étoiles, forks)
- Footer minimal avec lien vers le profil GitHub
- 100% responsive (mobile, tablette, desktop)
- Aucune dépendance externe à installer — juste ouvrir le fichier dans un navigateur

## Structure du projet

```
portfolio/
├── index.html      → structure de la page
├── style.css        → thème visuel (couleurs, animations, responsive)
├── script.js        → contenu dynamique des projets + interactions
└── README.md        → ce fichier
```

## Lancer le site en local

Aucune installation requise. Deux options :

**Option 1 — ouverture directe**
Double-clique sur `index.html`, il s'ouvre dans ton navigateur par défaut.

**Option 2 — serveur local** (recommandé, évite certains blocages de navigateur)
```bash
# avec Python
python3 -m http.server 8000

# avec Node.js
npx serve .
```
Puis ouvre `http://localhost:8000`.

## Personnalisation

### 1. Changer le nom affiché
Dans `index.html`, section `<h1 class="hero-name">`, chaque lettre est dans un `<span>` séparé (pour l'animation). Modifie les lettres tout en gardant un `<span>` par caractère.

### 2. Changer la phrase d'accroche
Dans `index.html`, modifie le texte du paragraphe `<p class="hero-tagline">`.

### 3. Ajouter / modifier tes projets
Dans `script.js`, tout en haut, le tableau `REPOS` :

```javascript
const REPOS = [
  {
    name: "Git_projet",
    description: "Decouvrir mes projets git.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/jenet2024/Git_Projet"
  },
  // ajoute d'autres objets ici
];
```
Chaque entrée devient automatiquement une carte cliquable qui ouvre le dépôt sur GitHub.



### 4. Changer les couleurs
Dans `style.css`, tout en haut, les variables CSS (`:root`) centralisent le thème :

```css
--bg-void: #0a0614;     /* fond le plus sombre */
--bg-deep: #170b2e;     /* fond dégradé */
--bg-glow: #3a1b6b;     /* halo en haut de page */
--accent: #9b6bff;      /* violet principal */
--accent-pink: #ff6bd6; /* rose secondaire */
--star-gold: #f5c451;   /* couleur des étoiles */
```
Change juste ces valeurs pour ajuster tout le thème d'un coup.

## Déployer le site en ligne (gratuit)

**GitHub Pages**
1. Crée un dépôt GitHub et pousse ces 3 fichiers dedans.
2. Va dans *Settings* → *Pages*.
3. Choisis la branche `main` et le dossier `/ (root)`.
4. Ton site sera accessible à `https://github.com/jenet2024/Git_Projet`.

**Netlify / Vercel**
Glisse-dépose simplement le dossier du projet sur [netlify.com/drop](https://app.netlify.com/drop) — aucun compte requis pour un premier déploiement rapide.

## Technologies utilisées

- HTML5
- CSS3 (variables CSS, animations, grid, gradients)
- JavaScript ES6 (vanilla, aucune librairie)
- Polices : [Unbounded](https://fonts.google.com/specimen/Unbounded), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)

## Auteur

**Jenet Tsopkeng**
GitHub : [github.com/jenettsopkeng]()