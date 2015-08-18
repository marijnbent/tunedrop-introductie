<?php

$getname = $_GET[' your_imagename '];

echo "< img src = fetch_image.php?name=".$getname." width=200 height=200 >";

?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="description" content=""/>
    <link rel="stylesheet" href=""/>
    <title>Upload Test</title>
</head>
<body>

<form method="POST" action="assets/php/getdata.php" enctype="multipart/form-data">
    <input type="file" name="myimage">
    <input type="submit" name="submit_image" value="Upload">
</form>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="assets/plugin/jQueryFileUpload/js/vendor/jquery.ui.widget.js"></script>
<script src="assets/plugin/jQueryFileUpload/js/jquery.iframe-transport.js"></script>
<script src="assets/plugin/jQueryFileUpload/js/jquery.fileupload.js"></script>
<script src="assets/js/uploadHandler.js"></script>

</body>
</html>