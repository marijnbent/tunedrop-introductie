function squareInteractionEmpty() {
    //$.ajax({
    //    dataType: "json",
    //    url: 'assets/php/ajaxCalls.php',
    //    data: {config: 2, x: currentGrid.x, y: currentGrid.y, teamId: currentTeamId},
    //    success: connectedSquaresHandler
    //});

    //Check all directions
    var Xmin = currentGrid.x - 1;
    var Ymin = currentGrid.y - 1;
    var Xplus = currentGrid.x + 1;
    var Yplus = currentGrid.y + 1;

    var connectedSquare = 0;

    for (var i = 1; i < gridArray.length - 1; i ++) {
        if ( (gridArray[i].y == currentGrid.y && (gridArray[i].x == Xmin || gridArray[i].x == Xplus)) ||
            (gridArray[i].x == currentGrid.x && (gridArray[i].y == Ymin || gridArray[i].y == Yplus)) ) {
            if (gridArray[i].teamId == currentTeamId) {

                console.log('Je mag shit overnemen :-)');
                connectedSquare = 1;
                break;
            } else {
                console.log(gridArray[i]);
                console.log(gridArray[i].teamId);
                console.log(currentTeamId);
                console.log('Je mag geen shit overnemen >:-8 ');
            }
        }
    }
}




function connectedSquaresHandler(connectedSquare) {
    console.log('//ConnectedSquaresHandler//');
    console.log(connectedSquare);
    if (data.length < 1) {
        $("#interaction-section")
            .empty()
            .html('Deze sector is niet aangesloten aan je netwerk. Tough luck cuntnigger.')
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
                .html('Deze sector kan nu worden overgenomen pussy ass bitch.')
            );
    }
}

function squareInteractionFriendly(data) {
    console.log('grid is yours and full');
    console.log(data);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Dit is jouw grid bro.')
        )
}

function squareInteractionEnemy(data) {
    console.log('The enemy team is here');
    console.log(data);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Dit is hostile. Maar mag je deze overnemen?')
        )
}

function placePointHandler(){
    console.log("click!")

    //MAKE PHOTO

    //SEND TO FIREBASE

    //CHANGE BACKGROUND

    //SEND TO DATABASE

    //RELOADS(PARTIALLY) PAGE
}


