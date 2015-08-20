<?php

//Starts session so we can use the session variables.
session_start();
//Include db.php file to use our code on multiple pages.
require_once 'assets/php/config.php';
require_once 'assets/php/db.php';
require_once 'assets/php/password-validation.php';

//Checks if the session variable 'loggedIn' exists, which only is granted to users who've validated their logindata.
if (!isset($_SESSION["loggedIn"])) {
	header("Location: login.php");
	exit;
}
if (isset($_POST['submit'])) {

	if (!empty($_POST['teamName']) && !empty($_FILES['photo'])) {
		$name = dataFilter($_POST['teamName'], $dbLink);

		$errors = array();
		$file_name = $_FILES['photo']['name'];
		$file_size = $_FILES['photo']['size'];
		$file_tmp = $_FILES['photo']['tmp_name'];
		$file_type = $_FILES['photo']['type'];


		if ($file_size > 10097152) {
			$errors[] = 'File size must be under 10 MB';
		}
		if (empty($errors) == true) {
			define ('SITE_ROOT', realpath(dirname(__FILE__)));
			move_uploaded_file($file_tmp, SITE_ROOT . "/assets/img/uploaded/" . $file_name);

			//TODO: CHECK PATH FOR REAL SITE. ADD SITE_ROOT
			$path = "/github/tunedrop-introductie/assets/img/uploaded/" . $file_name;
		} else {
			$path = "http://www.hogeschoolrotterdam.nl/images/logo.png";
		}

		$update = "UPDATE `teams` SET selfChosenTeamName = '" . $name . "', photo = '" . $path . "', firstTimeLogin = 1 WHERE id = '" . $_SESSION['teamId'] . "'";

		queryToDatabase($dbLink, $update);

		$_SESSION['teamSelfChosenTeamName'] = $_POST['teamName'];
		$_SESSION['teamPhoto'] = $path;
		setcookie("teamSelfChosenTeamName", $_POST['teamName'], time()+360000);  /* expire in 100 hour */
		setcookie("teamPhoto", $path, time()+360000);  /* expire in 100 hour */

		header("Location: index.php");
		exit;
	} else {
		$danger = "Vul alle velden in.";
	}

}

?>

<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>TuneDrop</title>
	<!-- Bootstrap core CSS -->
	<link href="assets/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>

<div class="site-wrapper">
	<div class="container">

		<div class="row">
			<section class="col-md-12">

				<?php if (isset ($warning)) {
					echo $warning;
				}
				if (isset ($danger)) {
					echo $danger;
				} ?>

				<div id="teaminfo">

					<form action="<?= $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
						<div class="form-group">
							<label for="teamName">Teamnaam:</label>
							<input name="teamName" type="text" id="teamName" class="form-control" required>

							<p>Verzin je eigen teamnaam welke uiteindelijk in de statistieken wordt weergeven.</p>
						</div>
						<div class="form-group">
							<label for="photo">Teamfoto:</label>
							<input type="file" name="photo" id="photo" class="form-control" accept="image/*" required/>

							<p>Maak een leuke groepsfoto!</p>
						</div>

						<input type="submit" name="submit" id="submit" class="btn btn-default" value="Verzenden">

						<p>Let op: je kunt dit later niet meer aanpassen.</p>

					</form>

			</section>
		</div>

	</div>
</div>

</body>
</html>