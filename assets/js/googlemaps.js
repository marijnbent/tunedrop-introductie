var map;

    var minZoomLevel = 13;
    var maxZoomLevel = 16;

function initialize() {
    var mapOptions = {
        center: {lat: 51.911722, lng: 4.463599},
        zoom: 12,
        minZoom: minZoomLevel,
        maxZoom: maxZoomLevel,
        mapTypeId: "customMapStyle",
        disableDefaultUI: true
    };

    // Custom map overlay settings (customMap.js) and applies settings to the map.
    var styledMap = new google.maps.StyledMapType(mapStyle, {name: "Styled Map"});
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set('customMapStyle', styledMap);
}
google.maps.event.addDomListener(window, 'load', initialize);