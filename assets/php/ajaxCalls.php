<?php

require_once("config.php");

if (isset($_GET['config'])) {

    $c = $_GET['config'];
    switch ($c) {
        //Gets the general grid as a playing field
        case 0:
            $count = 0;
            $jsonArray = [];
            $query = "SELECT
    g.id
  , g.latStart
  , g.latEnd
  , g.lngStart
  , g.lngEnd
  , g.X
  , g.Y
FROM grids g
";
            $queryResult = mysqli_query($connect, $query);
            foreach ($queryResult as $row) {
                $jsonArray[$count]['gridId'] = $row['id'];
                $jsonArray[$count]['latStart'] = $row['latStart'];
                $jsonArray[$count]['lngStart'] = $row['lngStart'];
                $jsonArray[$count]['latEnd'] = $row['latEnd'];
                $jsonArray[$count]['lngEnd'] = $row['lngEnd'];

                $jsonArray[$count]['x'] = $row['X'];
                $jsonArray[$count]['y'] = $row['Y'];
                $count++;
            }
            header('Content-Type: application/json');
            echo json_encode($jsonArray);
            exit;

            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
    }

} //Closing function