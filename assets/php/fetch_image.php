<?php

require_once("config.php");


$select_path = "select * from image_table";

$var = mysql_query($select_path);

while ($row = mysql_fetch_array($var)) {
    $image_name = $row["imagename"];
    $image_path = $row["imagepath"];

    echo "img src=" . $image_path . "/" . $image_name . " width=100 height=100";
}
?>