---
layout: archive
title: "Collaborators"
permalink: /collaborators/
author_profile: true
---

<style>
.collab-sort {
  display: flex; gap: 0.4em; margin-bottom: 1.5em;
  align-items: center; flex-wrap: wrap;
}
.sort-label {
  font-size: 0.8em; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: #888; margin-right: 0.3em;
}
.sort-btn {
  padding: 0.28em 0.85em; border: 1px solid #ccc; border-radius: 999px;
  background: #fff; color: #444; font-size: 0.85em; cursor: pointer;
  transition: all 0.15s; font-family: inherit;
}
.sort-btn:hover { border-color: #52adc8; color: #52adc8; }
.sort-btn.active { background: #52adc8; border-color: #52adc8; color: #fff; font-weight: 600; }

.collab-section { margin-bottom: 1.8em; }
.collab-heading {
  font-size: 1.1em; font-weight: 700; color: #333;
  margin: 0 0 0.7em; padding-bottom: 0.3em;
  border-bottom: 2px solid #52adc8; display: inline-block;
}

.collab-list { list-style: none; margin: 0; padding: 0; }
.collab-row {
  display: flex; align-items: baseline;
  justify-content: space-between; gap: 1em;
  padding: 0.55em 0; border-bottom: 1px solid #f0f0f0;
  font-size: 0.93em;
}
.collab-row:last-child { border-bottom: none; }

.collab-name {
  font-weight: 600; color: #222;
  white-space: nowrap; min-width: 200px;
}
.collab-name a { text-decoration: none; color: #222; }
.collab-name a:hover { color: #52adc8; }

.collab-inst { flex: 1; color: #666; font-size: 0.92em; }

.collab-year {
  font-size: 0.78em; color: #aaa; white-space: nowrap; flex-shrink: 0;
}

.collab-badge {
  white-space: nowrap; font-size: 0.75em; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.05em;
  padding: 0.15em 0.65em; border-radius: 999px; flex-shrink: 0;
}
.badge-eu { background: #e8f4f8; color: #2e7d9e; }
.badge-af { background: #d5f5e3; color: #145a32; }
.badge-me { background: #fde0e0; color: #8b1a1a; }
</style>

<div class="collab-sort">
  <span class="sort-label"><span class="lang-en">Sort by</span><span class="lang-fr">Trier par</span></span>
  <button class="sort-btn active" onclick="sortCollabs('alpha')">A–Z</button>
  <button class="sort-btn" onclick="sortCollabs('date')"><span class="lang-en">Year</span><span class="lang-fr">Année</span></button>
</div>

<div class="collab-section">
<h2 class="collab-heading"><span class="lang-en">Europe</span><span class="lang-fr">Europe</span></h2>
<ul class="collab-list" id="list-eu">
  <li class="collab-row" data-name="Benkhaldoun" data-year="2012">
    <span class="collab-name"><a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank">Fayssal Benkhaldoun</a></span>
    <span class="collab-inst">Université Sorbonne Paris Nord (USPN), France</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2012</span>
    <span class="collab-badge badge-eu">France</span>
  </li>
  <li class="collab-row" data-name="Boubekeur" data-year="2020">
    <span class="collab-name">Mohammed Boubekeur</span>
    <span class="collab-inst">Université Sorbonne Paris Nord (USPN), France</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2020</span>
    <span class="collab-badge badge-eu">France</span>
  </li>
  <li class="collab-row" data-name="Cérin" data-year="2013">
    <span class="collab-name"><a href="https://lipn.univ-paris13.fr/~cerin/" target="_blank">Christophe Cérin</a></span>
    <span class="collab-inst">Université Sorbonne Paris Nord (USPN), France</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2013</span>
    <span class="collab-badge badge-eu">France</span>
  </li>
  <li class="collab-row" data-name="Deleersnijder" data-year="2021">
    <span class="collab-name"><a href="https://perso.uclouvain.be/eric.deleersnijder/cms/" target="_blank">Eric Deleersnijder</a></span>
    <span class="collab-inst">Université Catholique de Louvain (UCLouvain), Belgium</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2021</span>
    <span class="collab-badge badge-eu">Belgium</span>
  </li>
  <li class="collab-row" data-name="Ghidaglia" data-year="9999">
    <span class="collab-name"><a href="https://centreborelli.ens-paris-saclay.fr/fr/annuaire-des-personnes/jean-michel-ghidaglia" target="_blank">Jean-Michel Ghidaglia</a></span>
    <span class="collab-inst">Centre Borelli, ENS Paris-Saclay, France</span>
    <span class="collab-year"></span>
    <span class="collab-badge badge-eu">France</span>
  </li>
  <li class="collab-row" data-name="Greneche" data-year="2025">
    <span class="collab-name"><a href="https://sites.google.com/view/nicolas-greneche" target="_blank">Nicolas Greneche</a></span>
    <span class="collab-inst">Université Sorbonne Paris Nord (USPN), France</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2025</span>
    <span class="collab-badge badge-eu">France</span>
  </li>
  <li class="collab-row" data-name="Saouab" data-year="2021">
    <span class="collab-name"><a href="https://ed-psime.normandie-univ.fr/blog/annuaire/saouab-abdelghani-pr/" target="_blank">Abdelghani Saouab</a></span>
    <span class="collab-inst">Université Le Havre Normandie (ULHN), France</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2021</span>
    <span class="collab-badge badge-eu">France</span>
  </li>
</ul>
</div>

<div class="collab-section">
<h2 class="collab-heading"><span class="lang-en">Africa</span><span class="lang-fr">Afrique</span></h2>
<ul class="collab-list" id="list-af">
  <li class="collab-row" data-name="Abida" data-year="2024">
    <span class="collab-name">Otman Abida</span>
    <span class="collab-inst">University Mohammed VI Polytechnic (UM6P), Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2024</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Basmadjian" data-year="9999">
    <span class="collab-name"><a href="https://www.robert-basmadjian.com/" target="_blank">Robert Basmadjian</a></span>
    <span class="collab-inst">University Mohammed VI Polytechnic (UM6P), Morocco</span>
    <span class="collab-year"></span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Bergou" data-year="2026">
    <span class="collab-name"><a href="https://ehbergou.github.io/" target="_blank">El Houcine Bergou</a></span>
    <span class="collab-inst">University Mohammed VI Polytechnic (UM6P), Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2026</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Boukharfane" data-year="2023">
    <span class="collab-name"><a href="https://radouanboukharfane.github.io/" target="_blank">Radouan Boukharfane</a></span>
    <span class="collab-inst">University Mohammed VI Polytechnic (UM6P), Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2023</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="El Mahi" data-year="2012">
    <span class="collab-name">Imad El Mahi</span>
    <span class="collab-inst">École Nationale des Sciences Appliquées d'Oujda (ENSAO), Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2012</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Ferradi" data-year="2025">
    <span class="collab-name">Khalil Ferradi</span>
    <span class="collab-inst">University Mohammed VI Polytechnic (UM6P), Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2025</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Kalloubi" data-year="2023">
    <span class="collab-name">Fahd Kalloubi</span>
    <span class="collab-inst">Cadi Ayyad University, Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2023</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Kassab" data-year="9999">
    <span class="collab-name">Zineb Kassab</span>
    <span class="collab-inst">University Mohammed VI Polytechnic (UM6P), Morocco</span>
    <span class="collab-year"></span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Ziggaf" data-year="2019">
    <span class="collab-name"><a href="https://sites.google.com/view/ziggaf-moussa" target="_blank">Moussa Ziggaf</a></span>
    <span class="collab-inst">Abdelmalek Essaâdi University, Morocco</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2019</span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
  <li class="collab-row" data-name="Ziani" data-year="9999">
    <span class="collab-name">Mohammed Ziani</span>
    <span class="collab-inst">Faculty of Sciences, Mohammed V University in Rabat (UM5), Morocco</span>
    <span class="collab-year"></span>
    <span class="collab-badge badge-af">Morocco</span>
  </li>
</ul>
</div>

<div class="collab-section">
<h2 class="collab-heading"><span class="lang-en">Middle East &amp; Gulf</span><span class="lang-fr">Moyen-Orient &amp; Golfe</span></h2>
<ul class="collab-list" id="list-me">
  <li class="collab-row" data-name="Ltaeif" data-year="2024">
    <span class="collab-name"><a href="https://cemse.kaust.edu.sa/profiles/hatem-ltaief" target="_blank">Hatem Ltaeif</a></span>
    <span class="collab-inst">KAUST University, Saudi Arabia</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2024</span>
    <span class="collab-badge badge-me">Saudi Arabia</span>
  </li>
  <li class="collab-row" data-name="Temimi" data-year="2024">
    <span class="collab-name">Helmi Temimi</span>
    <span class="collab-inst">Abdullah Al-Salem University, Kuwait</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2024</span>
    <span class="collab-badge badge-me">Kuwait</span>
  </li>
  <li class="collab-row" data-name="Zahri" data-year="2022">
    <span class="collab-name"><a href="https://www.sharjah.ac.ae/ar/Academics/Faculty-And-Staff/Mostafa-Zahri" target="_blank">Mostafa Zahri</a></span>
    <span class="collab-inst">University of Sharjah, UAE</span>
    <span class="collab-year"><span class="lang-en">since</span><span class="lang-fr">depuis</span> 2022</span>
    <span class="collab-badge badge-me">UAE</span>
  </li>
</ul>
</div>

<script>
function sortCollabs(by) {
  document.querySelectorAll('.sort-btn').forEach(function(b){ b.classList.remove('active'); });
  event.target.classList.add('active');

  ['list-eu','list-af','list-me'].forEach(function(id) {
    var ul = document.getElementById(id);
    var items = Array.from(ul.querySelectorAll('.collab-row'));
    items.sort(function(a, b) {
      if (by === 'alpha') {
        return a.dataset.name.localeCompare(b.dataset.name);
      } else {
        return parseInt(a.dataset.year) - parseInt(b.dataset.year);
      }
    });
    items.forEach(function(item){ ul.appendChild(item); });
  });
}
</script>
