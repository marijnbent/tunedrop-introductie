console.log('getLocation.js ingeladen');

function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({
            position: currentLocation,
            map: map
        });
        getCurrentGrid(marker)
    });
}

function getCurrentGrid(marker) {

    //K = Longitude, G = Latitude
    var currentLat = marker.position.G;
    var currentLng = marker.position.K;
    for (i = 0; i < gridArray.length; i++) {
        if (currentLat > gridArray[i].latStart && currentLat < gridArray[i].latEnd && currentLng > gridArray[i].lngStart && currentLng < gridArray[i].lngEnd) {
            console.log("You are in grid " + gridArray[i].id);
            currentGrid = gridArray[i].id;
            break;
        } else if (i == gridArray.length - 1) {
            console.log("You are not in the grid.")
        }
    }}
