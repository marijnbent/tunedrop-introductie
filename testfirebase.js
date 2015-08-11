var map;


function initialize() {
    var mapOptions = {
        center: {lat: 51.924420, lng: 4.477733},
        zoom: 14
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);
init();

function init() {

    var myDataRef = new Firebase('https://tunedrop.firebaseio.com/');
    var pointRef = myDataRef.child("points");

    $("#form").submit(function (event) {
        event.preventDefault();

        var lat = $('#lat').val();
        var lng = $('#lng').val();
        var teamId = $('#teamId').val();
        var gridId = $('#gridId').val();
        var photo = $('#photo').val();

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
//    pointRef.update({
//        200: {
//            teamId: "rood01",
//            photo: "http://cooler.png",
//            lat: 51.925216,
//            lng: 4.469301
//        }
//    });

//    pointRef.set({
//        235: {
//            teamId: "rood01",
//            photo: "http://cool.png",
//            lat: 40.200001,
//            lng: 20.9999
//        },
//        245: {
//            teamId: "rood01",
//            photo: "http://cool.png",
//            lat: 40.200001,
//            lng: 20.9999
//        }
//    });


//    $('#form').keypress(function (e) {
//        if (e.keyCode == 13) {
////            console.log('Keypress recognized');
//            var lat = $('#lat').val();
//            var lng = $('#lng').val();
//            var teamId = $('#teamId').val();
//            var gridId = $('#gridId').val();
//            var photo = $('#photo').val();
////            console.log(lat + lng + teamId + gridId + photo);
//            myDataRef.push({lat: lat, lng: lng, teamId: teamId, gridId: gridId, photo: photo});
////            $('#messageInput').val('');
//        }
//

//


function requestMarkerLocations(pointRef) {
//Request marker locations, put in array
    var fireData;

    pointRef.on("value", function (snapshot) {
        console.log(snapshot.val());
        fireData = snapshot.val();

        for (var i = 0; i < 380; i++) {
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

function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
//

//    //For each location, create marker
//
//    $.each(fireData, function( key, value ) {
//        console.log( key + ": " + value );
//    });

//    var markerLatLng = new google.maps.LatLng(-25.363882,131.044922);
//    var marker = new google.maps.Marker({
//        position: markerLatLng,
//        map: map,
//        title: 'Blanco'
//    });