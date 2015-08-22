<?php

session_start();

if (!isset($_SESSION['loggedIn'])) {
	header("Location: login.php");
	exit;
}



?>
<html lang="en">
<head>
    <?php require_once('assets/php/head.php'); ?>
</head>
<body>

<div class="site-wrapper">
	<div class="site-wrapper-inner">
		<div class="cover-container">
			<div class="masthead clearfix">
				<div class="inner-navbar">
					<h2 class="masthead-brand">TuneDrop</h2>
					<nav>
						<ul class="nav masthead-nav ">
							<li class="active"><a href="index.php">Kaart</a></li>
							<li><a href="overview.php">Overzicht</a></li>
							<li><a href="instructions.php">Instructies</a></li>
							<li><a href="statistics.php">Statistieken</a></li>
							<li><a href="info.php">Info</a></li>
							<li><a href="uploadtest.php">Dat Upload</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="inner cover">
				<h4 class="page-title">Kaart</h4>

				<p class="lead">Dit is de home pagina waar de game wordt gespeeld</p>

				<p>Jij bent team '<?= $_SESSION['teamName']; ?>', met het id '<?= $_SESSION['teamId']; ?>'. Jullie naam
					is
					'<?= $_SESSION['teamSelfChosenTeamName']; ?>'. Jullie foto is <a
						href="<?= $_SESSION['teamPhoto']; ?>">hier</a> te vinden.</p>

				<div id="map-canvas"></div>
				<div id="interaction-section"></div>
				<div id="modal-point-placer" class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content" style="color: #000000 !important">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
										aria-hidden="true">&times;</span></button>
								<h4 class="modal-title">Voeg een punt toe</h4>
							</div>
							<div class="modal-body">
								<p>Awesome dat je ons spel speelt!</p>

								<p>Voor dit punt moeten wij natuurlijk wel een leuke teamfoto ontvangen. Maak er een en
									plaats de punt!</p>

<!--								<div class="form-group">-->
<!--									<label for="photo">Puntfoto:</label>-->
<!--									<input type="file" name="photo" id="photo" class="form-control" accept="image/*"-->
<!--									       required/>-->
<!--								</div>-->

								<input name="file" type="file"
								       class="cloudinary-fileupload" data-cloudinary-field="image_id"
								       data-form-data=" ... html-escaped JSON data ... " />

							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Sluit</button>
								<button id="submitPhoto" type="button" class="btn btn-primary">Punt plaatsen</button>
							</div>
						</div>
						<!-- /.modal-content -->
					</div>
					<!-- /.modal-dialog -->
				</div>
				<!-- /.modal -->

			</div>
		</div>
	</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Do we need this file? -->
<script src="assets/js/bootstrap.min.js"></script>
<script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>

<script src='assets/js/jquery.ui.widget.js' type='text/javascript'></script>
<script src='assets/js/jquery.iframe-transport.js' type='text/javascript'></script>
<script src='assets/js/jquery.fileupload.js' type='text/javascript'></script>
<script src='assets/js/jquery.cloudinary.js' type='text/javascript'></script>

<script src="assets/js/firebase.js"></script>
<script src="assets/js/buildMap.js"></script>
<script src="assets/js/buildGrid.js"></script>
<script src="assets/js/customMap.js"></script>
<script src="assets/js/getLocation.js"></script>
<script src="assets/js/interactionHandler.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>