// Initialize and add the map
function initMap() {
    // The location of Poli
    const poli = { lat: 46.7723290010982, lng: 23.585296677390705 };
    // The map, centered at Poli
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: poli,
        mapId: "8e0a97af9386fef",
    });

    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "black",
        fillOpacity: 0.8,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
    };

    // The marker, positioned at Poli
    const marker = new google.maps.Marker({
        position: poli,
        map: map,
        title: "Universitatea Tehnica Cluj-Napoca",
        icon: svgMarker,
        animation: google.maps.Animation.DROP,
    });

    const contentString =
        "<h3>UTCN</h3>" + "<p>Coords: 46.7, 23.6</p>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
}

window.initMap = initMap;