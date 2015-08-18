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



