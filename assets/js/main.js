$(init);

/**
 * Initializes the application, builds the map, gets the grid
 */

function init(){
    buildMap();
    getGrid();
}

function getGrid(){
    $.ajax({
        dataType: "json",
        url: 'ajaxCalls.php',
        data: {config: 0},
        success: getGridHandler
    });
}



