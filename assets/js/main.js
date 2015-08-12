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
        url: 'json.php',
        data: {tag: searchTag},
        success: tagDataCallback
    });
}

