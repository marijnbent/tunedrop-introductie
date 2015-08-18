<?php
require_once("config.php");


$imagename = $_FILES["myimage"]["name"];

//Get the content of the image and then add slashes to it 
$imagetmp = addslashes(file_get_contents($_FILES['myimage']['tmp_name']));

//Insert the image name and image content in image_table
$insert_image = "INSERT INTO photos VALUES('$imagetmp','$imagename')";

$result = mysqli_query($connect, $insert_image)

?>

