<?php

//Starts session so we can use the session variables.
session_start();
//Include db.php file to use our code on multiple pages.
require_once 'assets/php/config.php';
require_once 'assets/php/db.php';
require_once 'assets/php/password-validation.php';

//Checking if you're already logged in. If you are, sends you back to the secured page.
if (isset($_SESSION['loggedIn'])) {
	header("Location: index.php");
	exit;
}


if (isset($_GET['registered'])) {
	$message = "U kunt nu inloggen met uw zojuist ingevulde gegevens.";
}

//If you've submitted the login form, this function will start to check your data.
if (isset($_POST['submit'])) {
	//Anti sql injection via the input field and put the values of the form to variables.
	$teamName = dataFilter($_POST['teamName'], $dbLink);
	//Create query to collect the email and password from database.
	$select = "SELECT * FROM teams
			   WHERE `name` = '" . $teamName . "'";
	//Send query to the function mySqlConnection with the query, config settings and dbconnection.
	$result = queryToDatabase($dbLink, $select);
	$user = queryToArray($result);

	if (!isset ($user[0]['password'])) {
		$warning = "Je hebt verkeerde gegevens ingevuld";
	} else {

		$correctPassword = $user[0]['password'];
		$salt = $user[0]['salt'];
		$inputPassword = hashPassword($salt, $_POST['password']);

		//Checks if the returned array is empty and if the email and password match the input value's.
		if ($correctPassword == $inputPassword) {
			//Create basic sessions
			$_SESSION["loggedIn"] = true;
			$_SESSION["teamId"] = $user[0]['id'];
			$_SESSION['teamName'] = $user[0]['name'];
			setcookie("teamId", $user[0]['id'], time()+360000);  /* expire in 100 hour */
			setcookie("teamName", $user[0]['name'], time()+360000);  /* expire in 100 hour */


			//If this is first login, go to the wizard
			if ($user[0]['firstTimeLogin'] == 0) {
				header("Location: teamaccount.php");
				//Aan het eind van wizard firstTimeLogin als 1 zetten als we foto hebben en teamnaam etc.
				exit;
				//Else, we can start the game
			} else if ($user[0]['firstTimeLogin'] == 1) {

				$_SESSION['teamSelfChosenTeamName'] = $user[0]['selfChosenTeamName'];
				$_SESSION['teamPhoto'] = $user[0]['photo'];
				setcookie("teamSelfChosenTeamName", $user[0]['selfChosenTeamName'], time()+360000);  /* expire in 100 hour */
				setcookie("teamPhoto", $user[0]['photo'], time()+360000);  /* expire in 100 hour */


				header("Location: index.php");
				exit;
			} else {
				echo "An error occurred. Please contact the school.";
			}

		} else {
			//If there is no match, show message with the result.
			$danger = "Inloggen is niet gelukt. Probeer het opnieuw.";
		}
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

				<form action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">
					<div class="form-group">
						<label for="teamName">Teamnaam:</label>
						<input name="teamName" type="text" id="teamName" class="form-control" required>
					</div>
					<div class="form-group">
						<label for="password">Wachtwoord:</label>
						<input name="password" type="password" id="password" class="form-control" required>
					</div>

					<input type="submit" name="submit" id="submit" class="btn btn-default" value="Inloggen">

				</form>
			</section>
		</div>

	</div>
</div>


</body>
</html>