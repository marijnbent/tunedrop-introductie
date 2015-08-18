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

	if (!empty($_POST['teamName']) && !empty($_POST['photo'])) {
		$name = dataFilter($_POST['teamName'], $dbLink);
		$photo = $_POST['photo'];

		$update = "UPDATE `teams` SET selfChosenTeamName = '" . $name . "', photo = '" . $photo . "', firstTimeLogin = 1 WHERE id = 8";

		queryToDatabase($dbLink, $update);

		$_SESSION['teamSelfChosenTeamName'] = $_POST['name'];
		$_SESSION['teamPhoto'] = $_POST['photo'];
		setcookie("teamSelfChosenTeamName", $_POST['name'], time()+360000);  /* expire in 100 hour */
		setcookie("teamPhoto", $_POST['photo'], time()+360000);  /* expire in 100 hour */

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

					<form action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">
						<div class="form-group">
							<label for="teamName">Teamnaam:</label>
							<input name="teamName" type="text" id="teamName" class="form-control" required>
							<p>Verzin je eigen teamnaam welke uiteindelijk in de statistieken wordt weergeven.</p>
						</div>
						<div class="form-group">
							<label for="photo">Teamfoto:</label>
							<input name="photo" type="text" id="photo" class="form-control" required>
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