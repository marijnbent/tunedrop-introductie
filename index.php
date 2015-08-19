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

                <p class="lead">Dit is de home pagina waar de game word gespeeld</p>

                <div id="map-canvas"></div>
                <div id="interaction-section"></div>

            </div>
            <!--<div class="mastfoot">-->
            <!--<div class="inner">-->
            <!--<p>TuneDrop 2015</p>-->
            <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Do we need this file? -->
<script src="assets/js/bootstrap.min.js"></script>
<script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>

<script src="assets/js/firebase.js"></script>
<script src="assets/js/buildMap.js"></script>
<script src="assets/js/buildGrid.js"></script>
<script src="assets/js/customMap.js"></script>
<script src="assets/js/getLocation.js"></script>
<script src="assets/js/interactionHandler.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>