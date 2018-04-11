let mymap = L.map('map').setView([47,11], 13); // L. ist Leafletbibliothek, erstes map ist Funktion, zweitews ist div aus der htmlDatei
let basemap = L.tileLayer ("https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png").addTo(mymap);
