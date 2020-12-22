let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng)},
        zoom: 15,
        scrollwheel: false
    });

    let personMarker = new google.maps.Marker({
        position: {lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng)},
        map: map,
        title: "User Location",
    });

    for (let i = 0; i < busLocations.length; i++) {
        let marker = new google.maps.Marker({
            position: {lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE)},
            map: map,
            title: "Route #" + busLocations[i].ROUTE + ", Bus #" + busLocations[i].VEHICLE,
        });

        const contentString =
            '<div id="content">' +
            '<div id="siteNotice">' + "</div>" +
            '<h1 id="firstHeading" class="firstHeading">' + 'Route #' + busLocations[i].ROUTE + ', Bus #' + busLocations[i].VEHICLE + '</h1>' +
            '<div id="bodyContent">' + "</div>" +
            '</div>';

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}
