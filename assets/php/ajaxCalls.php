<?php

require_once("db.php");


if (isset($_GET['config'])) {
	$c = $_GET['config'];
	switch ($c) {
		//Gets the general grid as a playing field
		case 0:
			$count = 0;
			$jsonArray = [];
			$query = "SELECT g.id, g.latStart, g.latEnd, g.lngStart, g.lngEnd, g.X, g.Y FROM grids g";
			$queryResult = queryToDatabase($connect, $query);
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
            //Gets the team id for the grid you're currently in
            $currentGrid = $_GET['currentgrid'];
            $query = "SELECT teamId FROM grids WHERE id = " . $currentGrid . ";";
            $queryResult = queryToDatabase($connect, $query);
            $queryResult = queryToArray($queryResult);
            header('Content-Type: application/json');
            echo json_encode($queryResult);
            exit;

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