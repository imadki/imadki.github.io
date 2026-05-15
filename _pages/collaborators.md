---
layout: archive
title: "Collaborators"
permalink: /collaborators/
author_profile: true
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<style>
#collab-map {
  height: 420px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 2em;
  border: 1px solid #e0e0e0;
}
.leaflet-popup-content-wrapper {
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.88em;
}
.leaflet-popup-content { margin: 10px 14px; line-height: 1.55; }
.map-popup-inst { font-weight: 700; color: #222; margin-bottom: 0.3em; }
.map-popup-people { color: #444; }
.map-popup-link a { color: #52adc8; text-decoration: none; font-size: 0.9em; }
</style>

<div id="collab-map"></div>

<script>
(function () {
  var map = L.map('collab-map', { scrollWheelZoom: false }).setView([30, 15], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 10
  }).addTo(map);

  var pinIcon = function(color) {
    return L.divIcon({
      className: '',
      html: '<div style="width:14px;height:14px;border-radius:50%;background:' + color + ';border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.35);"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10]
    });
  };

  var markers = [
    {
      latlng: [48.95, 2.35],
      color: '#52adc8',
      popup: '<div class="map-popup-inst">Université Sorbonne Paris Nord (USPN) — France</div><div class="map-popup-people">Fayssal Benkhaldoun, Christophe Cérin,<br>Mohammed Boubekeur, Nicolas Greneche</div><div class="map-popup-link"><a href="https://www.math.univ-paris13.fr/~fayssal/" target="_blank">F. Benkhaldoun</a> · <a href="https://lipn.univ-paris13.fr/~cerin/" target="_blank">C. Cérin</a></div>'
    },
    {
      latlng: [49.49, 0.11],
      color: '#52adc8',
      popup: '<div class="map-popup-inst">Université Le Havre Normandie (ULHN) — France</div><div class="map-popup-people">Abdelghani Saouab</div><div class="map-popup-link"><a href="https://ed-psime.normandie-univ.fr/blog/annuaire/saouab-abdelghani-pr/" target="_blank">Personal page</a></div>'
    },
    {
      latlng: [48.71, 2.17],
      color: '#52adc8',
      popup: '<div class="map-popup-inst">Centre Borelli, ENS Paris-Saclay — France</div><div class="map-popup-people">Jean-Michel Ghidaglia</div>'
    },
    {
      latlng: [50.67, 4.61],
      color: '#e8a020',
      popup: '<div class="map-popup-inst">UCLouvain — Belgium</div><div class="map-popup-people">Eric Deleersnijder</div>'
    },
    {
      latlng: [25.35, 55.42],
      color: '#c0392b',
      popup: '<div class="map-popup-inst">University of Sharjah — UAE</div><div class="map-popup-people">Mostafa Zahri</div>'
    },
    {
      latlng: [29.38, 47.98],
      color: '#c0392b',
      popup: '<div class="map-popup-inst">Abdullah Al-Salem University — Kuwait</div><div class="map-popup-people">Helmi Temimi</div>'
    },
    {
      latlng: [22.31, 39.10],
      color: '#c0392b',
      popup: '<div class="map-popup-inst">KAUST — Saudi Arabia</div><div class="map-popup-people">Hatem Ltaeif</div>'
    },
    {
      latlng: [32.20, -7.93],
      color: '#27ae60',
      popup: '<div class="map-popup-inst">UM6P, Ben Guerir — Morocco</div><div class="map-popup-people">Robert Basmadjian, Khalil Ferradi,<br>Radouan Boukharfane, Lamiae Azizi,<br>Ismail Berrada, Zineb Kassab, Otman Abida</div><div class="map-popup-link"><a href="https://www.robert-basmadjian.com/" target="_blank">R. Basmadjian</a></div>'
    },
    {
      latlng: [34.68, -1.91],
      color: '#27ae60',
      popup: '<div class="map-popup-inst">ENSAO, Oujda — Morocco</div><div class="map-popup-people">Imad El Mahi</div>'
    },
    {
      latlng: [31.63, -7.99],
      color: '#27ae60',
      popup: '<div class="map-popup-inst">Cadi Ayyad University, Marrakech — Morocco</div><div class="map-popup-people">Fahd Kalloubi</div>'
    }
  ];

  markers.forEach(function(m) {
    L.marker(m.latlng, { icon: pinIcon(m.color) })
      .addTo(map)
      .bindPopup(m.popup);
  });
})();
</script>
