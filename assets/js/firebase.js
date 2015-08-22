var markers = [];

function firebaseInit() {

    //Setting up connection with Firebase
    var myDataRef = new Firebase('https://tunedrop.firebaseio.com/');

    //Save databaselocation for points
    var pointRef = myDataRef.child("points");

    requestMarkerLocations(pointRef);
}

//Request all markerlocations from firebase
function requestMarkerLocations(pointRef) {

    var fireData;

    pointRef.on("value", function (snapshot) {
        //All points from firebase
        fireData = snapshot.val();

        //Delete old markers
        for (var ii = 0; ii < markers.length; ii++) {
            markers[ii].setMap(null);
        }

        $.each(fireData, function (nameOfObject, objectData) {
            if (objectData.active == 1) {
                var latlng = new google.maps.LatLng(objectData.lat, objectData.lng);
                addMarker(latlng, objectData.teamId);
                addColorToGrid(objectData.gridId, objectData.teamId)
            }
            if (objectData.gridId == currentGrid) {
                getLocation()
            }
        });

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

}

//Create marker with the known location


function addMarker(location, teamIdMarker) {

    var teamIcon = teamIdIcon[teamIdMarker];

    var marker = new google.maps.Marker({
        position: location,
        icon: teamIcon,
        map: map
    });
    markers.push(marker);
}

function addColorToGrid(gridIdMarker, teamIdMarker) {
    // Background color for gridId
    gridIdMarker = gridIdMarker - 1;
    var rectangle;

    //Get teamcolor from main.js for the holding team
    var teamColor = teamIdColor[teamIdMarker];

    //Delete rectangle which is about to be replaced with new color
    gridArray[gridIdMarker].setMap(null);

    //Create new rectangle with the appropriate background color
    rectangle = new google.maps.Rectangle({
        strokeOpacity: 1,
        strokeWeight: 0.2,
        strokeColor: '#000000',
        id: gridIdMarker,
        latStart: gridArray[gridIdMarker].latStart,
        latEnd: gridArray[gridIdMarker].latEnd,
        lngStart: gridArray[gridIdMarker].lngStart,
        lngEnd: gridArray[gridIdMarker].lngEnd,
        x: gridArray[gridIdMarker].x,
        y: gridArray[gridIdMarker].y,
        fillColor: teamColor,
        fillOpacity: 0.5,
        map: map,
        bounds: new google.maps.LatLngBounds(
            //Starting coordinates (latStart, lngStart)
            new google.maps.LatLng(gridArray[gridIdMarker].latStart, gridArray[gridIdMarker].lngStart),
            //Ending coordinates (latEnd, lngEnd)
            new google.maps.LatLng(gridArray[gridIdMarker].latEnd, gridArray[gridIdMarker].lngEnd))
    });

    //Add new grid to array.
    gridArray[gridIdMarker] = rectangle;

}

function sendCurrentPosition(myDataRef) {
//Save databaselocation for points
    var currentPositionRef = myDataRef.child("currentPosition");
    var teamId = 1;
    var lat = 1;
    var lng = 1;
    var markerInfo = {};
    teamPosition[teamId] = {lat: lat, lng: lng};

//And push it to the Firebase
    currentPositionRef.update(teamPosition);
}

//Send data to firebase when form is submitted SHIT
//    $("#form").submit(function (event) {
//        event.preventDefault();
//
//        var lat = $('#lat').val();
//        var lng = $('#lng').val();
//        var teamId = $('#teamId').val();
//        var photo = $('#photo').val();
//        var gridId = $('#gridId').val();

//        //Create new objects with gridId as key, so it's dynamic
//        var markerInfo = {};
//        markerInfo[gridId] = {teamId: teamId, photo: photo, lat: lat, lng: lng, gridId: gridId};
//
//        //And push it to the Firebase
//        pointRef.update(markerInfo);
// });