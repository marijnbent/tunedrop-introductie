var map;

$(init);

function init() {
    mapLoad();
    mapHeight();
    //Also sets mapHeight for when all elements are loaded (without this it can result in the map not filling the screen properly due to images not having loaded yet)
    //It also resizes when you resize the window.
    $(window).on('load', mapHeight);
    $(window).on('resize', mapHeight);
}

function mapLoad() {
    // This is the minimum zoom level that we'll allow
    var minZoomLevel = 13;
    var maxZoomLevel = 16;

    var mapOptions = {
        center: {lat: 51.911722, lng: 4.463599},
        zoom: 14,
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

function mapHeight() {
    //Sets height for map: Total size of window minus the form in the top and 2 pixels due to borders set in css
    var mapHeight = $(window).height();
    $('#map-canvas').height(mapHeight);

}