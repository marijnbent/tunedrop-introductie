<?php

//Starts session so we can use the session variables.
session_start();
//Include db.php file to use our code on multiple pages.
require_once 'assets/php/db.php';
require_once 'assets/php/password-validation.php';

//Checking if you're already logged in. If you are, sends you back to the secured page.
if (isset($_SESSION['loggedIn'])) {
	header("Location: secure.php");
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
	$select = "SELECT * FROM users
			   WHERE `name` = '" . $teamName . "'";
	//Send query to the function mySqlConnection with the query, config settings and dbconnection.
	$result = queryToDatabase($dbLink, $select);
	$user = resultToArray($result);
	$correctPassword = $user[0]['password'];
	$salt = $user[0]['salt'];
	$inputPassword = hashPassword($salt, $_POST['password']);

	//Checks if the returned array is empty and if the email and password match the input value's.
	if ($correctPassword == $inputPassword) {
		$_SESSION["teamId"] = $user[0]['id'];
		$_SESSION['teamPhoto'] = $user[0]['photo'];
		$_SESSION['teamName'] = $user[0]['name'];
		$_SESSION['teamSelfChosenTeamName'] = $user[0]['selfChosenTeamName'];
		$_SESSION['loggedIn'] = true;

		if ($user[0]['firstTimeLogin'] == 0) {
			header("Location: wizard.php");
			exit;
		}
		header("Location: index.php");
		exit;
	} else {
		//If there is no match, show message with the result.
		$danger = "Inloggen is niet gelukt. Probeer het opnieuw.";
	}
}

?>

//TODO header
<div class="row">
		<section class="col-md-12">

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

//TODO Footer