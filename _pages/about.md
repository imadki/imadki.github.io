---
permalink: /
title: "Dr. Eng. Imad Kissami"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>

.role-badges { display: flex; flex-wrap: wrap; gap: 0.6em; margin: 0.9em 0 1.2em; }
.role-badge {
  display: flex; align-items: center; gap: 0.45em;
  padding: 0.4em 0.85em; border: 1px solid #d0e8f0;
  border-radius: 6px; background: #f4fafc;
  font-size: 0.84em; color: #2a5070; line-height: 1.3;
}
.role-badge-icon { font-size: 1em; flex-shrink: 0; }
.role-badge strong { color: #1a4a6b; }

.highlight-list { list-style: none; margin: 0.8em 0 0; padding: 0; }
.highlight-item {
  display: flex; gap: 1em; padding: 0.65em 0;
  border-bottom: 1px solid #f0f0f0; align-items: flex-start;
}
.highlight-item:last-child { border-bottom: none; }
.highlight-date {
  min-width: 68px; font-size: 0.78em; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.05em;
  color: #fff; background: #52adc8; border-radius: 4px;
  padding: 0.2em 0.55em; text-align: center;
  flex-shrink: 0; margin-top: 0.1em;
}
.highlight-tag {
  display: inline-block; font-size: 0.7em; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  padding: 0.12em 0.5em; border-radius: 3px;
  margin-right: 0.4em; vertical-align: middle;
}
.tag-keynote { background: #e8f4f8; color: #2e7d9e; }
.tag-grant   { background: #d5f5e3; color: #145a32; }
.tag-event   { background: #f0f0f0; color: #666; }
.tag-phd     { background: #fef9cc; color: #7a5800; }
.highlight-text { font-size: 0.92em; color: #444; line-height: 1.55; }

.career-timeline {
  position: relative; margin: 1em 0 0.5em;
  padding-left: 1.6em; border-left: 2px solid #52adc8;
}
.career-item { position: relative; margin-bottom: 1.1em; padding-left: 1em; }
.career-item::before {
  content: ""; position: absolute;
  left: -1.72em; top: 0.35em;
  width: 10px; height: 10px; border-radius: 50%;
  background: #52adc8; border: 2px solid #fff;
  box-shadow: 0 0 0 1.5px #52adc8;
}
.career-item.past::before { background: #ccc; box-shadow: 0 0 0 1.5px #ccc; }
.career-period {
  font-size: 0.8em; color: #999; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.1em;
}
.career-role { font-weight: 700; font-size: 0.95em; color: #222; }
.career-inst { font-size: 0.88em; color: #666; margin-top: 0.05em; }
</style>


<!-- ==================== ENGLISH ==================== -->
<div id="content-en" class="lang-en-block">

<p>I am an <strong>Assistant Professor</strong> at the <a href="https://www.um6p.ma">University Mohammed VI Polytechnic (UM6P)</a>, <a href="https://cc.um6p.ma/">College of Computing</a>, Ben Guerir, Morocco.</p>

<div class="role-badges">
  <div class="role-badge"><span class="role-badge-icon">🖥️</span><span><strong>Head</strong> — Simlab Supercomputer</span></div>
  <div class="role-badge"><span class="role-badge-icon">📋</span><span><strong>Advisory Board Member</strong> — <a href="https://toubkal.um6p.ma/" target="_blank">Toubkal Supercomputer</a></span></div>
  <div class="role-badge"><span class="role-badge-icon">🎓</span><span><strong>NVIDIA DLI Certified Instructor</strong> &amp; University Ambassador</span></div>
  <div class="role-badge"><span class="role-badge-icon">🚀</span><span><strong>Co-founder</strong> — <a href="https://www.linkedin.com/company/moroccohpc/" target="_blank">Morocco HPC</a></span></div>
</div>

<p>In my research, I focus on the development, implementation and application of parallel numerical methods at the intersection of <strong>High Performance Computing (HPC)</strong>, <strong>Computational Fluid Dynamics (CFD)</strong>, and <strong>Scientific Machine Learning</strong>. I work in particular on parallel Finite Volume solvers for unstructured meshes — targeting applications in shallow water flows, plasma physics, and Navier-Stokes equations — and am the lead developer of <a href="https://github.com/imadki/manapy"><strong>Manapy</strong></a>, a parallel Python library for solving PDEs on unstructured meshes, and <a href="https://github.com/imadki/mumps4py"><strong>Mumps4py</strong></a>, a Python interface to the MUMPS sparse direct solver officially adopted by the MUMPS project. Besides parallel numerical methods, I am also very much interested in Physics-Informed Neural Networks (PINNs), data-driven approaches for CFD, and energy optimization in HPC infrastructures. I support PhD students at UM6P and strongly advocate for the development of HPC and AI capacities across Africa.</p>

<h2>Scientific Codes</h2>
<p>I develop and maintain several open-source scientific codes:</p>
<ul>
  <li><strong><a href="https://github.com/imadki/manapy">Manapy</a></strong> — A parallel Python library for solving PDEs using the finite volume method on unstructured meshes (MPI-based, supports Shallow Water, Navier-Stokes, MHD, and more).</li>
  <li><strong><a href="https://github.com/imadki/mumps4py">Mumps4py</a></strong> — A Python interface for the MUMPS parallel sparse direct solver, officially adopted by the MUMPS project.</li>
  <li><strong><a href="https://github.com/Mohammed-khlifi/NeuralPDE-Solver">NeuralPDE-Solver</a></strong> — An open-source Python framework for applying PINNs, PINOs, and FNOs to steady-state PDEs.</li>
</ul>

<h2>Highlights</h2>
<ul class="highlight-list">
  <li class="highlight-item">
    <span class="highlight-date">Dec 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span>19th CHPC National Conference, Cape Town, South Africa — <em>Building the Future: Morocco's High-Performance Computing Infrastructure</em>.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Dec 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-event">Event</span>Organization of the <a href="https://toubkal.um6p.ma/supercomputingafrica" target="_blank"><strong>SupercomputingAfrica (SCAF)</strong></a> conference, Benguerir, Morocco.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Sep 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span>Advanced School on HPC and Applied AI for High-Resolution Regional Climate Modeling, UM6P.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Sep 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-phd">PhD</span>Launch of 3 new PhD theses — Imane Rhesri, Fatiha Barrade, Ayman Zahir.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Sep 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-grant">Grant</span>New grant: <em>Coupling Physical Models and Data for Monitoring Soil Evolution</em> — €375K, Nutricrops–OCP.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Oct 2022</span>
    <span class="highlight-text"><span class="highlight-tag tag-grant">Grant</span>Co-PI of the <strong>Multiphysics and HPC Chair</strong> — €6.3M, OCP, 5-year project.</span>
  </li>
</ul>

<h2>Career</h2>
<div class="career-timeline">
  <div class="career-item">
    <div class="career-period">Sep 2023 – present</div>
    <div class="career-role">Assistant Professor</div>
    <div class="career-inst">University Mohammed VI Polytechnic (UM6P), Ben Guerir, Morocco</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Apr 2019 – Sep 2023</div>
    <div class="career-role">Research &amp; Education Fellow</div>
    <div class="career-inst">University Mohammed VI Polytechnic (UM6P), Ben Guerir, Morocco</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Apr 2017 – Mar 2019</div>
    <div class="career-role">Postdoctoral Researcher</div>
    <div class="career-inst">ASNR, Fontenay-aux-Roses, France</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Dec 2013 – Feb 2017</div>
    <div class="career-role">PhD in Applied Mathematics &amp; Computer Science</div>
    <div class="career-inst">Université Sorbonne Paris Nord (USPN), France</div>
    <div class="career-inst" style="font-size:0.82em;color:#888;margin-top:0.1em;">Supervisors: <a href="https://lipn.univ-paris13.fr/~cerin/" target="_blank">Christophe Cérin</a> (LIPN) &amp; <a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank">Fayssal Benkhaldoun</a> (LAGA)</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Sep 2012 – Nov 2013</div>
    <div class="career-role">Predoctoral Position — MPI-Based parallelization for Finite Volume algorithms</div>
    <div class="career-inst">LAGA – USPN &amp; LMCS – ENSAO, Oujda, Morocco</div>
    <div class="career-inst" style="font-size:0.82em;color:#888;margin-top:0.1em;">Supervisors: <a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank">Fayssal Benkhaldoun</a> (USPN) &amp; Imad El Mahi (ENSAO)</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Sep 2007 – Jul 2012</div>
    <div class="career-role">Engineering Degree in Computer Science</div>
    <div class="career-inst">ENSAO, Oujda, Morocco</div>
  </div>
</div>

</div><!-- end #content-en -->

<!-- ==================== FRANÇAIS ==================== -->
<div id="content-fr" class="lang-fr-block">

<p>Je suis <strong>Professeur Assistant</strong> à l'<a href="https://www.um6p.ma">Université Mohammed VI Polytechnique (UM6P)</a>, <a href="https://cc.um6p.ma/">Collège d'Informatique</a>, Ben Guerir, Maroc.</p>

<div class="role-badges">
  <div class="role-badge"><span class="role-badge-icon">🖥️</span><span><strong>Responsable</strong> — Supercalculateur Simlab</span></div>
  <div class="role-badge"><span class="role-badge-icon">📋</span><span><strong>Membre du Conseil Consultatif</strong> — <a href="https://toubkal.um6p.ma/" target="_blank">Supercalculateur Toubkal</a></span></div>
  <div class="role-badge"><span class="role-badge-icon">🎓</span><span><strong>Instructeur Certifié NVIDIA DLI</strong> &amp; Ambassadeur Universitaire</span></div>
  <div class="role-badge"><span class="role-badge-icon">🚀</span><span><strong>Co-fondateur</strong> — <a href="https://www.linkedin.com/company/moroccohpc/" target="_blank">Morocco HPC</a></span></div>
</div>

<p>Mes recherches portent sur le développement, l'implémentation et l'application de méthodes numériques parallèles à l'intersection du <strong>Calcul Haute Performance (HPC)</strong>, de la <strong>Mécanique des Fluides Numérique (CFD)</strong> et de l'<strong>Apprentissage Automatique Scientifique</strong>. Je travaille en particulier sur des solveurs Volumes Finis parallèles pour maillages non-structurés — ciblant les applications en écoulements à surface libre, physique des plasmas et équations de Navier-Stokes — et suis le développeur principal de <a href="https://github.com/imadki/manapy"><strong>Manapy</strong></a>, une bibliothèque Python parallèle pour la résolution d'EDP sur maillages non-structurés, et de <a href="https://github.com/imadki/mumps4py"><strong>Mumps4py</strong></a>, une interface Python au solveur creux MUMPS officiellement adopté par le projet MUMPS. Au-delà des méthodes numériques parallèles, je m'intéresse également aux réseaux de neurones physiquement informés (PINNs), aux approches data-driven pour la CFD, et à l'optimisation énergétique des infrastructures HPC. J'accompagne des doctorants à l'UM6P et milite activement pour le développement des capacités HPC et IA en Afrique.</p>

<h2>Codes Scientifiques</h2>
<p>Je développe et maintiens plusieurs codes scientifiques open-source :</p>
<ul>
  <li><strong><a href="https://github.com/imadki/manapy">Manapy</a></strong> — Une bibliothèque Python parallèle pour la résolution d'EDP par la méthode des volumes finis sur maillages non-structurés (basée sur MPI, supporte Saint-Venant, Navier-Stokes, MHD, et plus).</li>
  <li><strong><a href="https://github.com/imadki/mumps4py">Mumps4py</a></strong> — Une interface Python pour le solveur direct creux parallèle MUMPS, officiellement adopté par le projet MUMPS.</li>
  <li><strong><a href="https://github.com/Mohammed-khlifi/NeuralPDE-Solver">NeuralPDE-Solver</a></strong> — Un framework Python open-source pour l'application des PINNs, PINOs et FNOs aux EDP en régime stationnaire.</li>
</ul>

<h2>Actualités</h2>
<ul class="highlight-list">
  <li class="highlight-item">
    <span class="highlight-date">Déc 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span>19e Conférence Nationale CHPC, Le Cap, Afrique du Sud — <em>Construire l'Avenir : l'Infrastructure de Calcul Haute Performance du Maroc</em>.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Déc 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-event">Événement</span>Organisation de la conférence <a href="https://toubkal.um6p.ma/supercomputingafrica" target="_blank"><strong>SupercomputingAfrica (SCAF)</strong></a>, Benguerir, Maroc.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Sep 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span>École Avancée sur le HPC et l'IA Appliquée pour la Modélisation Climatique Régionale à Haute Résolution, UM6P.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Sep 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-phd">Thèse</span>Lancement de 3 nouvelles thèses de doctorat — Imane Rhesri, Fatiha Barrade, Ayman Zahir.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Sep 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-grant">Projet</span>Nouveau financement : <em>Couplage de Modèles Physiques et de Données pour le Suivi de l'Évolution des Sols</em> — 375K€, Nutricrops–OCP.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Oct 2022</span>
    <span class="highlight-text"><span class="highlight-tag tag-grant">Projet</span>Co-PI de la <strong>Chaire Multiphysique et HPC</strong> — 6,3M€, OCP, projet sur 5 ans.</span>
  </li>
</ul>

<h2>Parcours</h2>
<div class="career-timeline">
  <div class="career-item">
    <div class="career-period">Sep 2023 – présent</div>
    <div class="career-role">Professeur Assistant</div>
    <div class="career-inst">Université Mohammed VI Polytechnique (UM6P), Ben Guerir, Maroc</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Avr 2019 – Sep 2023</div>
    <div class="career-role">Chargé de Recherche &amp; d'Enseignement</div>
    <div class="career-inst">Université Mohammed VI Polytechnique (UM6P), Ben Guerir, Maroc</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Avr 2017 – Mar 2019</div>
    <div class="career-role">Chercheur Postdoctoral</div>
    <div class="career-inst">ASNR, Fontenay-aux-Roses, France</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Déc 2013 – Fév 2017</div>
    <div class="career-role">Doctorat en Mathématiques Appliquées &amp; Informatique</div>
    <div class="career-inst">Université Sorbonne Paris Nord (USPN), France</div>
    <div class="career-inst" style="font-size:0.82em;color:#888;margin-top:0.1em;">Directeurs : <a href="https://lipn.univ-paris13.fr/~cerin/" target="_blank">Christophe Cérin</a> (LIPN) &amp; <a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank">Fayssal Benkhaldoun</a> (LAGA)</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Sep 2012 – Nov 2013</div>
    <div class="career-role">Position Prédoctorale — Parallélisation MPI pour algorithmes Volumes Finis</div>
    <div class="career-inst">LAGA – USPN &amp; LMCS – ENSAO, Oujda, Maroc</div>
    <div class="career-inst" style="font-size:0.82em;color:#888;margin-top:0.1em;">Encadrants : <a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank">Fayssal Benkhaldoun</a> (USPN) &amp; Imad El Mahi (ENSAO)</div>
  </div>
  <div class="career-item past">
    <div class="career-period">Sep 2007 – Juil 2012</div>
    <div class="career-role">Diplôme d'Ingénieur en Informatique</div>
    <div class="career-inst">ENSAO, Oujda, Maroc</div>
  </div>
</div>

</div><!-- end #content-fr -->

