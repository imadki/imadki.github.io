---
layout: archive
permalink: /
title: "Dr. Eng. Imad Kissami"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>

.profile-info { margin: 0.9em 0 1.5em; }
.profile-info-row {
  display: flex; gap: 1.2em;
  padding: 0.5em 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.88em; align-items: baseline;
}
.profile-info-row:last-child { border-bottom: none; }
.profile-info-key {
  min-width: 88px; font-size: 0.75em; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: #bbb; flex-shrink: 0; padding-top: 0.18em;
}
.profile-info-val { color: #333; line-height: 1.7; }
.profile-info-val a { color: #52adc8; }
.profile-info-val a:hover { color: #3a8fa8; }
.profile-sep { color: #ddd; margin: 0 0.4em; }
.profile-pos-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.35em 1.5em;
}
@media (max-width: 600px) { .profile-pos-grid { grid-template-columns: 1fr; } }
.profile-info-val code {
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 0.9em; background: #f3f3f3;
  padding: 0.1em 0.45em; border-radius: 3px; color: #444;
}

.code-pills { display: flex; flex-wrap: wrap; gap: 0.5em; margin: 0.15em 0 0; }
.code-pill {
  display: inline-flex; align-items: center; gap: 0.4em;
  padding: 0.32em 0.85em;
  background: #f0f0f0; border: 1px solid #ddd;
  border-radius: 20px; font-size: 0.83em; font-weight: 600;
  color: #333; text-decoration: none; transition: background 0.15s, border-color 0.15s;
}
.code-pill:hover { background: #e8f4f8; border-color: #b0d0e0; color: #2e7d9e; text-decoration: none; }
.code-pill svg { width: 14px; height: 14px; fill: currentColor; flex-shrink: 0; }

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

<p>I am an <strong>Assistant Professor</strong> at the <a href="https://www.um6p.ma">University Mohammed VI Polytechnic (UM6P)</a>, <a href="https://cc.um6p.ma/">College of Computing</a>, Ben Guerir, Morocco — working at the intersection of High Performance Computing, Computational Fluid Dynamics, and Scientific Machine Learning.</p>

<div class="profile-info">
  <div class="profile-info-row">
    <span class="profile-info-key">Positions</span>
    <span class="profile-info-val">
      <div class="profile-pos-grid">
        <span><strong>Head</strong>, Simlab Supercomputer</span>
        <span><strong>Advisory Board</strong>, <a href="https://toubkal.um6p.ma/" target="_blank">Toubkal</a></span>
        <span><strong>NVIDIA DLI</strong> Certified Instructor &amp; University Ambassador</span>
        <span><strong>Co-founder</strong>, <a href="https://www.linkedin.com/company/moroccohpc/" target="_blank">Morocco HPC</a>
          <a href="https://www.linkedin.com/company/moroccohpc/" target="_blank" title="LinkedIn" style="color:#0a66c2;margin-left:0.5em;"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@MoroccoHPC" target="_blank" title="YouTube" style="color:#ff0000;margin-left:0.3em;"><i class="fab fa-youtube"></i></a>
        </span>
      </div>
    </span>
  </div>
  <div class="profile-info-row">
    <span class="profile-info-key">Open source</span>
    <span class="profile-info-val">
      <div class="code-pills">
        <a href="https://github.com/imadki/manapy" class="code-pill" target="_blank">
          <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          manapy
        </a>
        <a href="https://github.com/imadki/mumps4py" class="code-pill" target="_blank">
          <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          mumps4py
        </a>
      </div>
    </span>
  </div>
</div>

<p>In my research, I focus on the development and application of parallel numerical methods, with a strong emphasis on energy-efficient HPC. I develop parallel Finite Volume solvers on hybrid meshes — for shallow water, plasma, and Navier-Stokes equations for non-Newtonian fluids — design Physics-Informed Neural Networks and data-driven methods for CFD, and investigate DVFS and power-aware strategies on production systems such as Toubkal. I supervise PhD students at UM6P and actively promote HPC and AI capacity building across Africa.</p>

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
    <div class="career-inst" style="font-size:0.82em;margin-top:0.3em;"><a href="https://theses.fr/230317146" target="_blank" style="color:#52adc8;"><i class="fas fa-file-alt" style="margin-right:0.3em"></i>Thesis — theses.fr</a></div>
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

<h2>Highlights</h2>
<ul class="highlight-list">
  <li class="highlight-item">
    <span class="highlight-date">May 2026</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span><a href="https://i2m4hydrosystem.sciencesconf.org/" target="_blank">I2M4HydroSystems Workshop</a>, Hammamet, Tunisia — <em>Enhancing CFD Solvers with Neural Networks</em>.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Dec 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span><a href="https://chpcconf.co.za/speakers-2/" target="_blank">19th CHPC National Conference</a>, Cape Town, South Africa — <em>Building the Future: Morocco's High-Performance Computing Infrastructure</em>.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Dec 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-event">Event</span>Organization of the <a href="https://toubkal.um6p.ma/supercomputingafrica" target="_blank"><strong>SupercomputingAfrica (SCAF)</strong></a> conference, Benguerir, Morocco.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Oct 2022</span>
    <span class="highlight-text"><span class="highlight-tag tag-grant">Grant</span>Co-PI of the <strong>Multiphysics and HPC Chair</strong> — €6.3M, OCP, 5-year project.</span>
  </li>
</ul>

</div><!-- end #content-en -->

<!-- ==================== FRANÇAIS ==================== -->
<div id="content-fr" class="lang-fr-block">

<p>Je suis <strong>Professeur Assistant</strong> à l'<a href="https://www.um6p.ma">Université Mohammed VI Polytechnique (UM6P)</a>, <a href="https://cc.um6p.ma/">Collège d'Informatique</a>, Ben Guerir, Maroc — à l'intersection du Calcul Haute Performance, de la Mécanique des Fluides Numérique et de l'Apprentissage Automatique Scientifique.</p>

<div class="profile-info">
  <div class="profile-info-row">
    <span class="profile-info-key">Postes</span>
    <span class="profile-info-val">
      <div class="profile-pos-grid">
        <span><strong>Responsable</strong>, Supercalculateur Simlab</span>
        <span><strong>Conseil Consultatif</strong>, <a href="https://toubkal.um6p.ma/" target="_blank">Toubkal</a></span>
        <span><strong>Instructeur NVIDIA DLI</strong> Certifié &amp; Ambassadeur Universitaire</span>
        <span><strong>Co-fondateur</strong>, <a href="https://www.linkedin.com/company/moroccohpc/" target="_blank">Morocco HPC</a>
          <a href="https://www.linkedin.com/company/moroccohpc/" target="_blank" title="LinkedIn" style="color:#0a66c2;margin-left:0.5em;"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@MoroccoHPC" target="_blank" title="YouTube" style="color:#ff0000;margin-left:0.3em;"><i class="fab fa-youtube"></i></a>
        </span>
      </div>
    </span>
  </div>
  <div class="profile-info-row">
    <span class="profile-info-key">Open source</span>
    <span class="profile-info-val">
      <div class="code-pills">
        <a href="https://github.com/imadki/manapy" class="code-pill" target="_blank">
          <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          manapy
        </a>
        <a href="https://github.com/imadki/mumps4py" class="code-pill" target="_blank">
          <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          mumps4py
        </a>
      </div>
    </span>
  </div>
</div>

<p>Dans mes recherches, je me concentre sur le développement et l'application de méthodes numériques parallèles, avec un fort accent sur l'efficacité énergétique en HPC. Je développe des solveurs Volumes Finis parallèles sur maillages hybrides — pour les équations des eaux peu profondes, de la physique des plasmas et de Navier-Stokes pour fluides non-newtoniens — conçois des réseaux de neurones physiquement informés (PINNs) et des méthodes data-driven pour la CFD, et étudie les stratégies DVFS et de gestion de la puissance sur des systèmes de production tels que Toubkal. J'encadre des doctorants à l'UM6P et milite activement pour le développement des capacités HPC et IA en Afrique.</p>

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
    <div class="career-inst" style="font-size:0.82em;margin-top:0.3em;"><a href="https://theses.fr/230317146" target="_blank" style="color:#52adc8;"><i class="fas fa-file-alt" style="margin-right:0.3em"></i>Thèse — theses.fr</a></div>
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

<h2>Actualités</h2>
<ul class="highlight-list">
  <li class="highlight-item">
    <span class="highlight-date">Mai 2026</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span><a href="https://i2m4hydrosystem.sciencesconf.org/" target="_blank">Workshop I2M4HydroSystems</a>, Hammamet, Tunisie — <em>Améliorer les Solveurs CFD avec des Réseaux de Neurones</em>.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Déc 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-keynote">Keynote</span><a href="https://chpcconf.co.za/speakers-2/" target="_blank">19e Conférence Nationale CHPC</a>, Le Cap, Afrique du Sud — <em>Construire l'Avenir : l'Infrastructure de Calcul Haute Performance du Maroc</em>.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Déc 2025</span>
    <span class="highlight-text"><span class="highlight-tag tag-event">Événement</span>Organisation de la conférence <a href="https://toubkal.um6p.ma/supercomputingafrica" target="_blank"><strong>SupercomputingAfrica (SCAF)</strong></a>, Benguerir, Maroc.</span>
  </li>
  <li class="highlight-item">
    <span class="highlight-date">Oct 2022</span>
    <span class="highlight-text"><span class="highlight-tag tag-grant">Projet</span>Co-PI de la <strong>Chaire Multiphysique et HPC</strong> — 6,3M€, OCP, projet sur 5 ans.</span>
  </li>
</ul>

</div><!-- end #content-fr -->
