/**
 * Config.js :-)
 */

var map;
var gridArray = [];
var currentGrid = {};

var teamIdColor = {
    2: "#ff0000", //red
    3: "#318DF7", //blue
    4: "#F79B31", //orange
    5: "#31F738", //green
    10: "#F1F731", //yellow
    1: "#ffffff" //neutral
};

$(init);

/**
 * Initializes the application, builds the map, gets the grid
 */

function init(){
    buildMap();
}

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

