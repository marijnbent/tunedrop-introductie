var map;


init();
google.maps.event.addDomListener(window, 'load', initialize);


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
        var gridId = $('#gridId').val();
        var photo = $('#photo').val();

        //Update or set gridId
        pointRef.update({
            240: {
                teamId: teamId,
                photo: gridId,
                lat: lat,
                lng: lng
            }
        });
    });

    requestMarkerLocations(pointRef);
}

//Request all markerlocations from firebase
function requestMarkerLocations(pointRef) {

    var fireData;

    pointRef.on("value", function (snapshot) {
        console.log(snapshot.val());
        fireData = snapshot.val();

        //For each gridId, add marker
        for (var i = 0; i < 380; i++) {
            //Don't create a marker if gridId isn't in the firebase
            if (fireData[i] != null) {
                console.log(fireData[i]);
                var marker = fireData[i];
                var latlng = new google.maps.LatLng(marker.lat, marker.lng);
                addMarker(latlng);
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
}