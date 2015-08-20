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
    2: "#ff0000", //red
    3: "#318DF7", //blue
    4: "#F79B31", //orange
    5: "#31F738", //green
    10: "#F1F731", //yellow
    1: "#ffffff" //neutral
};

var teamIdIcon = {
    2: "red.png", //red
    3: "blue.png", //blue
    4: "orange.png", //orange
    5: "green.png", //green
    10: "yellow.png", //yellow
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

