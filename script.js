//
const GITHUB_USERNAME = "jenet2024";

// Renseigne ici tes propres projets. Ajoute / supprime des entrées à volonté.
const REPOS = [
  {
    name: "devops-ci-cd-pipeline",
    description: "Automatisation complète de déploiement continu avec Docker, & GitHub Actions.",
    language: "AuthO, Authentification JWT , SSH ",
    stargazers_count: 24,
    forks_count: 8,
    html_url: "https://github.com/jenet2024/Devops-ci-cd-pipeline/actions"
  },
  {
    name: "Jeu de Cybersecurité H4CKR",
    description: "Sécurité, Se mettre dans la peau d'un Hacker , trouver des indices cachés",
    language: "Python , Pydantic , FastAPI , Mysql, React",
    stargazers_count: 42,
    forks_count: 15,
    html_url: "https://github.com/jenet2024/H4CKR"
  },
  {
    name: "Documentation Technique Python",
    description: "Système d'authentification robuste avec JWT, Redis cache et documentation OpenAPI / Swagger.",
    language: "Python , Mysql",
    stargazers_count: 19,
    forks_count: 5,
    html_url: "https://github.com/jenet2024/Methode_CRUD_Python"
  },
  {
    name: "Testing, Pytest,Jest",
    description: "Tests unitaires, tests paramétrés, mocking, tests d’intégration Flask, et une stratégie de test complète.",
    language: "Python, Swagger , Fast API",
    stargazers_count: 13,
    forks_count: 5,
    html_url: "https://github.com/jenet2024/Testing"
  }
  

];
// ========================

// stagger l'apparition des lettres du nom
document.querySelectorAll(".hero-name span").forEach((span, i) => {
  span.style.animationDelay = `${0.35 + i * 0.045}s`;
});

// halo qui suit la souris
const orb = document.getElementById("bgOrb");
window.addEventListener("pointermove", (e) => {
  orb.style.left = `${e.clientX}px`;
  orb.style.top = `${e.clientY}px`;
});
window.addEventListener("pointerleave", () => {
  orb.style.opacity = "0";
});
window.addEventListener("pointerenter", () => {
  orb.style.opacity = "1";
});

// année dans le footer
document.getElementById("footerYear").textContent = `© ${new Date().getFullYear()}`;

// icônes simples par langage
const LANG_COLORS = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
  HTML: "#e34c26", CSS: "#563d7c", Java: "#b07219", PHP: "#4F5D95",
  "C++": "#f34b7d", C: "#555555", Shell: "#89e051", Go: "#00ADD8",
  Vue: "#41b883", Dart: "#00B4AB", Ruby: "#701516", Swift: "#F05138"
};

function repoCard(repo, index) {
  const lang = repo.language || "Code";
  const color = LANG_COLORS[lang] || "#9b6bff";
  const desc = repo.description ? repo.description : "Pas de description pour le moment.";

  const card = document.createElement("a");
  card.className = "repo-card";
  card.href = repo.html_url;
  card.target = "_blank";
  card.rel = "noopener";
  card.style.animationDelay = `${index * 0.08}s`;

  card.innerHTML = `
    <div class="repo-top">
      <div class="repo-icon">
        <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9Zm10.5-1H4.5a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5Z"/>
        </svg>
      </div>
      <div class="repo-name">${repo.name}</div>
    </div>
    <p class="repo-desc">${desc}</p>
    <div class="repo-meta">
      <span class="repo-lang"><span class="lang-dot" style="background:${color}"></span>${lang}</span>
      <span class="stars">★ ${repo.stargazers_count}</span>
      <span>⑂ ${repo.forks_count}</span>
    </div>
    <div class="repo-clone">git clone ${repo.clone_url || repo.html_url + ".git"}</div>
  `;

  card.addEventListener("pointermove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });

  return card;
}

function loadRepos() {
  const grid = document.getElementById("repoGrid");
  grid.innerHTML = "";

  if (!REPOS.length) {
    grid.innerHTML = `<p class="repo-error">Ajoute tes projets dans le tableau REPOS de script.js pour les voir apparaître ici.</p>`;
    return;
  }
  REPOS.forEach((repo, i) => grid.appendChild(repoCard(repo, i)));
}

loadRepos();
