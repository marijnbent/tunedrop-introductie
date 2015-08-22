function squareInteractionEmpty() {

    //Check all directions
    var Xmin = currentGrid.x - 1;
    var Ymin = currentGrid.y - 1;
    var Xplus = currentGrid.x + 1;
    var Yplus = currentGrid.y + 1;
    var connectedSquare = false;
    for (var i = 1; i < gridArray.length - 1; i++) {
        if ((gridArray[i].y == currentGrid.y && (gridArray[i].x == Xmin || gridArray[i].x == Xplus)) ||
            (gridArray[i].x == currentGrid.x && (gridArray[i].y == Ymin || gridArray[i].y == Yplus))) {
            if (gridArray[i].teamId == currentTeamId) {
                console.log('Je mag shit overnemen :-)');
                connectedSquare = true;
                break;
            } else {
                console.log('Je mag geen shit overnemen >:-8 ');
            }
        }
    }
    connectedSquaresHandler(connectedSquare);
}


function connectedSquaresHandler(connectedSquare) {
    if (connectedSquare == true) {
        $("#interaction-section")
            .empty()
            .html('Deze sector is aangesloten aan je netwerk. Neem nu over.')
            .append($('<button>')
                .attr('class', 'interaction-button')
                .attr('id', 'newpoint')
                .text('Take-over')
            );
        $("#newpoint").on('click', placePointHandler)
    }
    else {
        $("#interaction-section")
            .empty()
            .append($('<tr>')
                .html('Deze sector is niet verbonden met je netwerk.')
            );
    }
}

function squareInteractionFriendly() {
    console.log('grid is yours and full');
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Deze sector hoort bij jouw netwerk. Ga snel naar een andere sector om deze aan je netwerk toe te voegen.')
        )
}

function squareInteractionEnemy(data) {
    $("#interaction-section")
        .empty()
        .html('Deze sector is van een vijandelijk team. Wil je dit punt verwijderen?')
        .append($('<button>')
            .attr('class', 'interaction-button')
            .attr('id', 'removepoint')
            .text('Remove')
        );
    $("#removepoint").on('click', removePointHandler)
}

function placePointHandler() {
    console.log("click!");



    //MAKE PHOTO

    //SEND TO FIREBASE

    //CHANGE BACKGROUND

    //SEND TO DATABASE

    //RELOADS(PARTIALLY) PAGE
}

function removePointHandler(){

}


