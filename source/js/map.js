import L from "leaflet";

import "leaflet/dist/leaflet.css";

const map = L.map("map", {
  center: [59.968378, 30.317471],
  zoom: 29,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const myIcon = L.icon({
  iconUrl: "./img/map/map-icon.svg",
  iconSize: [38, 50],
});

L.marker([59.968378, 30.317471], { icon: myIcon }).addTo(map);
