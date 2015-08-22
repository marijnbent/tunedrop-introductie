function squareInteractionEmpty() {
    $.ajax({
        dataType: "json",
        url: 'assets/php/ajaxCalls.php',
        data: {config: 2, x: currentGrid.x, y: currentGrid.y, teamId: currentTeamId},
        success: connectedSquaresHandler
    });

    //Check all directions
    var Xmin = currentGrid.x - 1;
    var Ymin = currentGrid.y - 1;
    var Xplus = currentGrid.x + 1;
    var Yplus = currentGrid.y + 1;

    console.log(currentGrid);
    //console.log(gridArray[currentGrid - 1].y);
    console.log(gridArray[currentGrid.id - 1]);
    if ((currentGrid.y == gridArray[currentGrid.id - 1].y && (Xmin == gridArray[currentGrid.id - 1].x || Xplus == gridArray[currentGrid.id - 1].x)) ||
        (currentGrid.x == gridArray[currentGrid.id - 1].x && (Ymin == gridArray[currentGrid.id - 1].y || Yplus == gridArray[currentGrid.id - 1].y))) {
        console.log('Match of niet bitch');
    } else {
        console.log('Matcht niet bitch of KUT');

    }

}

function connectedSquaresHandler(data) {
    console.log('//ConnectedSquaresHandler//');
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


