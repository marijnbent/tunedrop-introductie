<?php

//Starts session so we can use the session variables.
session_start();
//Include db.php file to use our code on multiple pages.
require_once 'assets/php/db.php';
require_once 'assets/php/password-validation.php';

//Checks if the session variable 'loggedIn' exists, which only is granted to users who've validated their logindata.
if (isset($_SESSION["loggedIn"])) {
	header("Location: index.php");
	exit;
}
if (isset($_POST['submitRegister'])) {

	if (!empty($_POST['name']) && !empty($_POST['password'])) {
		$name = dataFilter($_POST['name'], $dbLink);

		$salt = generateSalt();
		$hash = hashPassword($salt, $_POST['password']);

		$insert = "INSERT INTO `users` (`name`, `password`, `salt`) VALUES ('" . $name . "', '" . $hash . "', '" . $salt . "')";
		queryToDatabase($dbLink, $insert);
		header("Location: login.php?registered");
		exit;
	} else {
		$danger = "Vul alle velden in.";
	}

}

?>

//TODO HEADER

<span>Heeft u al een account? </span><a href="login.php">Ga naar de login pagina.</a>

<form action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">
	<div class="form-group">
		<label for="name">Naam:</label>
		<input name="name" type="text" id="name" <?php if (isset($_POST['submitRegister'])) { ?>
		       value="<?php echo $_POST['name'];
		       } ?>" class="form-control">
	</div>
	<div class="form-group">
		<label for="password">Wachtwoord:</label>
		<input name="password" type="password" id="password" <?php if (isset($_POST['submitRegister'])) { ?>
		       value="<?php echo $_POST['password'];
		       } ?>" class="form-control">
	</div>

	<input type="submit" name="submitRegister" id="submit" class="btn btn-info" value="Registreer">

</form>

//TODO FOOTER