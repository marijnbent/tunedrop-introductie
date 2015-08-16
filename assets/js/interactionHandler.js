function squareInteractionEmpty(data) {
    console.log("please place point");
    console.log(data);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Het grid is leeg yo')
        )
}

function squareInteractionFriendly(data) {
    console.log('grid is yours and full');
    console.log(data);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Dit is jouw grid bro')
        )
}

function squareInteractionEnemy(data) {
    console.log('The enemy team is here');
    console.log(data);
    $("#interaction-section")
        .empty()
        .append($('<tr>')
            .html('Dit is hostile ')
        )
}