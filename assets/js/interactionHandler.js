function squareInteractionEmpty(data) {
    console.log(currentGrid);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Het grid is leeg. Maar mag je deze overnemen?')
        );

    $.ajax({
        dataType: "json",
        url: 'assets/php/ajaxCalls.php',
        data: {config: 2, x: currentGrid.x, y: currentGrid.y, teamId: getCookie('teamId')},
        success: connectedSquaresHandler(data)
    });
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