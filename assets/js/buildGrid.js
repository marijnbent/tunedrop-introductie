/**
 * This function builds the game grid after getting a callback from the AJAX call (function getGrid())
 */

function getGridHandler(gridData) {
    var rectangle;
    $.each(gridData, function (i, squareData) {
        rectangle = new google.maps.Rectangle({
            strokeOpacity: 1,
            strokeWeight: 0.2,
            strokeColor: '#000000',
            id: squareData.id,
            latStart: squareData.latStart,
            latEnd: squareData.latEnd,
            lngStart: squareData.lngStart,
            lngEnd: squareData.lngEnd,
            x: squareData.X,
            y: squareData.Y,
            teamId: squareData.teamId,
            fillColor: '#FFFFFF',
            fillOpacity: 0.30,
            map: map,
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(squareData.latStart, squareData.lngStart),
                new google.maps.LatLng(squareData.latEnd, squareData.lngEnd))
        });
        gridArray.push(rectangle);
        google.maps.event.addListener(rectangle, 'click', function () {
            console.log(this.y + "Y, " + this.x + "X, " + this.id + " ID.");
        });
    });

    //Lets create the firebase connection and display the markers
    firebaseInit();

    getLocation();
}

