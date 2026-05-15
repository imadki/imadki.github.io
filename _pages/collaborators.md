---
layout: archive
title: "Collaborators"
permalink: /collaborators/
author_profile: true
---

<style>
.collab-region { margin-bottom: 2.2em; }

.collab-region-title {
  font-size: 1.1em; font-weight: 700; color: #333;
  margin: 0 0 0.8em; padding-bottom: 0.3em;
  border-bottom: 2px solid #52adc8; display: inline-block;
}

.collab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  gap: 0.6em;
}

.collab-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.8em 1em;
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
  user-select: none;
}
.collab-card:hover { border-color: #52adc8; box-shadow: 0 2px 6px rgba(82,173,200,0.15); }
.collab-card.open { border-color: #52adc8; background: #f4fafc; }

.collab-name {
  font-weight: 600;
  font-size: 0.91em;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4em;
}
.collab-name::after {
  content: "+";
  color: #52adc8;
  font-size: 1.1em;
  font-weight: 700;
  flex-shrink: 0;
}
.collab-card.open .collab-name::after { content: "\2212"; }

.collab-details {
  display: none;
  margin-top: 0.5em;
  padding-top: 0.5em;
  border-top: 1px solid #e8e8e8;
  font-size: 0.82em;
  line-height: 1.5;
}
.collab-card.open .collab-details { display: block; }

.collab-inst { display: block; color: #333; }
.collab-country { display: block; color: #999; margin-top: 0.15em; }
.collab-link { display: block; margin-top: 0.3em; }
.collab-link a { color: #52adc8; text-decoration: none; font-size: 0.9em; }
.collab-link a:hover { text-decoration: underline; }
</style>

<script>
function toggleCollab(card) { card.classList.toggle('open'); }
</script>

<div class="collab-region">
<h2 class="collab-region-title">France</h2>
<div class="collab-grid">

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Fayssal Benkhaldoun</div>
    <div class="collab-details">
      <span class="collab-inst">Université Sorbonne Paris Nord (USPN)</span>
      <span class="collab-country">France</span>
      <span class="collab-link"><a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank" onclick="event.stopPropagation()">Personal page</a></span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Christophe Cérin</div>
    <div class="collab-details">
      <span class="collab-inst">Université Sorbonne Paris Nord (USPN)</span>
      <span class="collab-country">France</span>
      <span class="collab-link"><a href="https://lipn.univ-paris13.fr/~cerin/" target="_blank" onclick="event.stopPropagation()">Personal page</a></span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Mohammed Boubekeur</div>
    <div class="collab-details">
      <span class="collab-inst">Université Sorbonne Paris Nord (USPN)</span>
      <span class="collab-country">France</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Nicolas Greneche</div>
    <div class="collab-details">
      <span class="collab-inst">Université Sorbonne Paris Nord (USPN)</span>
      <span class="collab-country">France</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Abdelghani Saouab</div>
    <div class="collab-details">
      <span class="collab-inst">Université Le Havre Normandie (ULHN)</span>
      <span class="collab-country">France</span>
      <span class="collab-link"><a href="https://ed-psime.normandie-univ.fr/blog/annuaire/saouab-abdelghani-pr/" target="_blank" onclick="event.stopPropagation()">Personal page</a></span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Jean-Michel Ghidaglia</div>
    <div class="collab-details">
      <span class="collab-inst">Centre Borelli, ENS Paris-Saclay</span>
      <span class="collab-country">France</span>
    </div>
  </div>

</div>
</div>

<div class="collab-region">
<h2 class="collab-region-title">Belgium</h2>
<div class="collab-grid">

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Eric Deleersnijder</div>
    <div class="collab-details">
      <span class="collab-inst">Université Catholique de Louvain (UCLouvain)</span>
      <span class="collab-country">Belgium</span>
    </div>
  </div>

</div>
</div>

<div class="collab-region">
<h2 class="collab-region-title">Middle East &amp; Gulf</h2>
<div class="collab-grid">

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Mostafa Zahri</div>
    <div class="collab-details">
      <span class="collab-inst">University of Sharjah</span>
      <span class="collab-country">United Arab Emirates</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Helmi Temimi</div>
    <div class="collab-details">
      <span class="collab-inst">Abdullah Al-Salem University</span>
      <span class="collab-country">Kuwait</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Hatem Ltaeif</div>
    <div class="collab-details">
      <span class="collab-inst">KAUST University</span>
      <span class="collab-country">Saudi Arabia</span>
    </div>
  </div>

</div>
</div>

<div class="collab-region">
<h2 class="collab-region-title">Morocco</h2>
<div class="collab-grid">

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Robert Basmadjian</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
      <span class="collab-link"><a href="https://www.robert-basmadjian.com/" target="_blank" onclick="event.stopPropagation()">Personal page</a></span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Khalil Ferradi</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Radouan Boukharfane</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Lamiae Azizi</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Ismail Berrada</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Zineb Kassab</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Otman Abida</div>
    <div class="collab-details">
      <span class="collab-inst">University Mohammed VI Polytechnic (UM6P)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Imad El Mahi</div>
    <div class="collab-details">
      <span class="collab-inst">École Nationale des Sciences Appliquées d'Oujda (ENSAO)</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

  <div class="collab-card" onclick="toggleCollab(this)">
    <div class="collab-name">Fahd Kalloubi</div>
    <div class="collab-details">
      <span class="collab-inst">Cadi Ayyad University</span>
      <span class="collab-country">Morocco</span>
    </div>
  </div>

</div>
</div>
