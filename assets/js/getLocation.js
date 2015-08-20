/**
 * getLocation uses the Google maps API establish your current location in the form of a marker, then uses that marker in the function getCurrentGrid
 */

function getLocation() {
    console.log("///////- getLocation started -////////");

    navigator.geolocation.getCurrentPosition(function (position) {
        //var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        //Beated the system!
        var currentLocation = new google.maps.LatLng(51.921149, 4.47033);
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
            currentGridTeamIdAjax();
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
 * AJAX call to determine the owner of the grid
 */

function currentGridTeamIdAjax() {
    $.ajax({
        dataType: "json",
        url: 'assets/php/ajaxCalls.php',
        data: {config: 1, currentgrid: currentGrid.id},
        success: currentGridTeamIdAjaxHandler
    });
}

/**
 * Checks to which team the square belongs (1 = neutral)
 * @param data
 */

function currentGridTeamIdAjaxHandler(data) {

    if (data[0].teamId == 1) {
        console.log('THE SQUARE IS EMPTY');
        squareInteractionEmpty();
    } else if (data[0].teamId == currentTeamId) {
        console.log('THE SQUARE BELONGS TO YOUR TEAM');
        squareInteractionFriendly();
    } else if (data[0].teamId != currentTeamId) {
        console.log('THE SQUARE BELONGS TO AN ENEMY TEAM');
        squareInteractionEnemy();
    } else {
        console.log('ERROR');
    }

}
