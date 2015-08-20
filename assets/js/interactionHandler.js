function squareInteractionEmpty() {
    $.ajax({
        dataType: "json",
        url: 'assets/php/ajaxCalls.php',
        data: {config: 2, x: currentGrid.x, y: currentGrid.y, teamId: currentTeamId},
        success: connectedSquaresHandler
    });
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


