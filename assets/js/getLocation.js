/**
 * getLocation uses the Google maps API establish your current location in the form of a marker, then uses that marker in the function getCurrentGrid
 */

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

/**
 * Loops through all the entries in the grid array, checks if the current marker is within the bounds, and if so, uses the id of that square to check who controls the square.
 * If a match can be found, currentGridTeamIdAjax() will commence.
 * @param marker
 */

function getCurrentGrid(marker) {
    //K = Longitude, G = Latitude
    //WARNING: Google Maps API changes these up quite often, be sure to check!
    var currentLat = marker.position.G;
    var currentLng = marker.position.K;
    for (i = 0; i < gridArray.length; i++) {
        if (currentLat > gridArray[i].latStart && currentLat < gridArray[i].latEnd && currentLng > gridArray[i].lngStart && currentLng < gridArray[i].lngEnd) {
            console.log("You are in grid " + gridArray[i].id);
            currentGrid = gridArray[i].id;
            currentGridTeamIdAjax();
            break;
        } else if (i == gridArray.length - 1) {
            $("#interaction-section")
                .empty()
                .append($('<tr>')
                    .html('Please enter the grid nyuggu')
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
        data: {config: 1, currentgrid: currentGrid},
        success: currentGridTeamIdAjaxHandler
    });
}

/**
 * Checks to which team the square belongs (1 = neutral)
 * @param data
 */

function currentGridTeamIdAjaxHandler(data) {
    console.log(data);
    if (data[0].teamId == 1) {
        //THE SQUARE IS EMPTY
        squareInteractionEmpty(data);
    } else if (data[0].teamId == 2) {
        //THE SQUARE BELONGS TO YOUR TEAM
        squareInteractionFriendly(data);
    } else if (data[0].teamId != 2) {
        //THE SQUARE BELONGS TO AN ENEMY TEAM
        squareInteractionEnemy(data);
    } else {
        //ERROR
    }
}
