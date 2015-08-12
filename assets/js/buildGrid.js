/**
 * This function builds the game grid after getting a callback from the AJAX call (function getGrid())
 */

function getGridHandler(gridData) {
    var rectangle;
    console.log(gridData);
    $.each(gridData, function (i, squareData) {
        rectangle = new google.maps.Rectangle({
            strokeOpacity: 1,
            strokeWeight: 0.2,
            strokeColor: '#000000',
            id: squareData.gridId,
            latStart: squareData.latStart,
            latEnd: squareData.latEnd,
            lngStart: squareData.lngStart,
            lngEnd: squareData.lngEnd,
            x: squareData.x,
            y: squareData.y,
            fillColor: '#FFFFFF',
            fillOpacity: 0.30,
            map: map,
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(squareData.latStart, squareData.lngStart),
                new google.maps.LatLng(squareData.latEnd, squareData.lngEnd))
        });
        gridArray.push(rectangle);
        google.maps.event.addListener(rectangle, 'click', function () {
            console.log(this.x + "X, " + this.y + "Y.");
        });
    });
    getLocation();
}

