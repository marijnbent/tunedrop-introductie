function squareInteractionEmpty() {
    $.ajax({
        dataType: "json",
        url: 'assets/php/ajaxCalls.php',
        data: {config: 2, x: currentGrid.x, y: currentGrid.y, teamId: currentTeamId},
        success: connectedSquaresHandler
    });
}

function connectedSquaresHandler(data) {
    if (data.length < 1) {
        $("#interaction-section")
            .empty()
            .html('Sector X:'+ currentGrid.x + ' Y:'+ currentGrid.y + ' kan niet worden overgenomen.')
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
                .html('Sector X:'+ currentGrid.x + ' Y: '+ currentGrid.y + ' kan worden overgenomen.')
            );
    }
}

function squareInteractionFriendly() {
    console.log('grid is yours and full');
    console.log(data);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Sector X:'+ currentGrid.x + ' Y: '+ currentGrid.y + ' is van jouw team.')
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


