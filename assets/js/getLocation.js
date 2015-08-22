/**
 * getLocation uses the Google maps API establish your current location in the form of a marker, then uses that marker in the function getCurrentGrid
 */

function getLocation() {

    navigator.geolocation.getCurrentPosition(function (position) {
        //var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        //Beated the system!
        var currentLocation = new google.maps.LatLng(51.924986, 4.458647);
        var marker = new google.maps.Marker({
            position: currentLocation,
            map: map
        });
        getCurrentGrid(marker)
    });
}

/**
 * Loops through all the entries in the grid array, checks if the current marker is within the bounds, and if so, uses the id of that square to check who controls the square.
 * If a match can be found, currentGridTeamIdAjax() will commence.
 * @param marker
 */

function getCurrentGrid(marker) {
    //G = Latitude, K = Longitude
    //WARNING: Google Maps API changes these up quite often, be sure to check!
    var currentLat = marker.position.G;
    var currentLng = marker.position.K;
    for (var i = 0; i < gridArray.length; i++) {
        //TODO: What happend here?
        if (currentLat > gridArray[i].latStart && currentLat < gridArray[i].latEnd && currentLng > gridArray[i].lngStart && currentLng < gridArray[i].lngEnd) {
            currentGrid.id = gridArray[i].id;
            currentGrid.x = gridArray[i].x;
            currentGrid.y = gridArray[i].y;
            currentSquareTeamChecker();
            break;
        } else if (i == gridArray.length - 1) {
            $("#interaction-section")
                .empty()
                .append($('<tr>')
                    .html('Please enter the grid')
                )
        }
    }
}

/**
 * Checks to which team the square belongs (1 = neutral)
 * @param data
 */

function currentSquareTeamChecker() {

    currentGrid;
    if (data[0].teamId == 1) {
        squareInteractionEmpty();
    } else if (data[0].teamId == currentTeamId) {
        squareInteractionFriendly();
    } else if (data[0].teamId != currentTeamId) {
        squareInteractionEnemy();
    } else {
    }
}
