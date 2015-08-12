function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({
            position: currentLocation,
            map: map
        })
    })
}
