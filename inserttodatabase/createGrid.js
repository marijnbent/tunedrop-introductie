var latStart = [];
var lngStart = [];
var latEnd = [];
var lngEnd = [];
var x = [];
var y = [];

$(init);

function init() {

    var dim = 0.0025;
    var dim2 = 0.004;
    for (var i = 0; i < 25; i++) {
        for (var j = 0; j < 25; j++) {
            latStart.push(51.880173 + (i * dim));
            lngStart.push(4.412449 + (j * dim2));
            latEnd.push(51.880173 + dim + (i * dim));
            lngEnd.push(4.412449 + dim2 + (j * dim2));
            x.push(i + 1);
            y.push(j + 1);
        }
    }
    console.log(y);
    fillTable();
    //writeToDatabase();
}

function fillTable() {
    for (var i = 0; i < latStart.length; i++) {
        $("#grid-table")
            .append($('<tr>')
                .append($('<td>')
                    .text(latStart[i])
                )
                .append($('<td>')
                    .text(lngStart[i])
                )
                .append($('<td>')
                    .text(latEnd[i])
                )
                .append($('<td>')
                    .text(lngEnd[i])
                )
                .append($('<td>')
                    .text(x[i])
                )
                .append($('<td>')
                    .text(y[i])
                )
            )
    }
}

function writeToDatabase(){
    $.ajax({
        type: "POST",
        data: {
            latStart: latStart,
            lngStart: lngStart,
            latEnd: latEnd,
            lngEnd: lngEnd,
            x: x,
            y: y
        },
        url: "writeToDataBase.php",
        success: console.log("Data sent")

    });
}