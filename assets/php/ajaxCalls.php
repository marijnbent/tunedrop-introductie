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
  , MAX(p.teamId) teamId
FROM grids g
  LEFT JOIN points p ON p.gridId = g.id
GROUP BY
    g.id
  , g.latStart
  , g.latEnd
  , g.lngStart";
            $queryResult = mysqli_query($connect, $query);
            foreach ($queryResult as $row) {
                $jsonArray[$count]['gridId'] = $row['id'];
                $jsonArray[$count]['latStart'] = $row['latStart'];
                $jsonArray[$count]['lngStart'] = $row['lngStart'];
                $jsonArray[$count]['latEnd'] = $row['latEnd'];
                $jsonArray[$count]['lngEnd'] = $row['lngEnd'];
                $jsonArray[$count]['teamId'] = $row['teamId'];
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