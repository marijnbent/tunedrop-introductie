/**
 * Config.js :-)
 */

var map;
var gridArray = [];
var currentGrid = {};
var currentTeamId = getCookie('teamId');
var currentTeamPhoto = getCookie('teamPhoto');
var currentTeamSelfChosenTeamName = getCookie('teamSelfChosenTeamName');

var teamIdColor = {
    2: "#203066", //blue
    3: "#0D4748", //green
    4: "#FAB313", //yellow
    5: "#A8111B", //red
    10: "#8E3975", //purple
    1: "#ffffff" //neutral
};

var teamIdIcon = {
    2: "assets/img/icon/blueMarker.png", //blue
    3: "assets/img/icon/greenMarker.png", //green
    4: "assets/img/icon/yellowMarker.png", //yellow
    5: "assets/img/icon/redMarker.png", //red
    10: "assets/img/icon/purpleMarker.png", //purple
    1: "no-icon.png" //neutral
};

$(init);

/**
 * Initializes the application, builds the map, gets the grid
 */

function init(){
    buildMap();
}

//TODO: Why is this here?
function getGrid(){
    $.ajax({
        dataType: "json",
        url: 'assets/php/ajaxCalls.php',
        data: {config: 0},
        success: getGridHandler
    });
}

/**
 *
 * Script from w3schools, read the value of a cookie.
 *
 * @param cname
 * @returns {string}
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

