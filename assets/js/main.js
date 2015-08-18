var map;
var gridArray = [];
var currentGrid = {};


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



