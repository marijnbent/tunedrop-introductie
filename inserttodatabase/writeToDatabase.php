<?php

require_once "../assets/php/config.php";

$latStart = $_POST['latStart'];
$lngStart = $_POST['lngStart'];
$latEnd = $_POST['latEnd'];
$lngEnd = $_POST['lngEnd'];
$x = $_POST['x'];
$y = $_POST['y'];

for ($i = 0; $i < count($latStart); $i++) {
    $query = "INSERT INTO `grids` (`id`, `latStart`, `lngStart`, `latEnd`, `lngEnd`, `x`, `y`)
    VALUES (NULL, '" . $latStart[$i] . "', '" . $lngStart[$i] . "', '" . $latEnd[$i] . "', '" . $lngEnd[$i] . "', '" . $x[$i] . "', '" . $y[$i] . "');";
    mysqli_query($connect, $query);
}