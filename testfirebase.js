var map;
var markers = [];

init();
google.maps.event.addDomListener(window, 'load', init);


function init() {

    //Google maps initialization
    var mapOptions = {
        center: {lat: 51.924420, lng: 4.477733},
        zoom: 14
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    //Setting up connection with Firebase
    var myDataRef = new Firebase('https://tunedrop.firebaseio.com/');

    //Save databaselocation for points
    var pointRef = myDataRef.child("points");

    //Send data to firebase when form is submitted
    $("#form").submit(function (event) {
        event.preventDefault();

        var lat = $('#lat').val();
        var lng = $('#lng').val();
        var teamId = $('#teamId').val();
        var photo = $('#photo').val();
        var gridId = $('#gridId').val();

        //Create new objects with gridId as key, so it's dynamic
        var markerInfo = {};
        markerInfo[gridId] = {teamId: teamId, photo: photo, lat: lat, lng: lng, gridId: gridId};

        //And push it to the Firebase
        pointRef.update(markerInfo);
    });

    requestMarkerLocations(pointRef);
}

//Request all markerlocations from firebase
function requestMarkerLocations(pointRef) {

    var fireData;

    pointRef.on("value", function (snapshot) {
        console.log(snapshot.val());
        fireData = snapshot.val();

        //Delete old markers
        for (var ii = 0; ii < markers.length; ii++) {
            markers[ii].setMap(null);
        }

        //For each gridId, add marker
        for (var i = 0; i < 636; i++) { //TODO DO WE NEED THIS?
            //Don't create a marker if gridId isn't in the firebase
            if (fireData[i] != null) {
                console.log(fireData[i]);
                var marker = fireData[i];
                var latlng = new google.maps.LatLng(marker.lat, marker.lng);
                addMarker(latlng);
                addColorToGrid(marker.gridId)
            }
        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

}

//Create marker with the known location
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}

function addColorToGrid(gridId) {
    // Background color for gridId
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