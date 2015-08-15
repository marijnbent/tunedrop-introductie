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
                            <li class="active"><a href="index.html">Kaart</a></li>
                            <li><a href="overview.html">Overzicht</a></li>
                            <li><a href="instructions.html">Instructies</a></li>
                            <li><a href="statistics.html">Statistieken</a></li>
                            <li><a href="info.html">Info</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="inner cover">
                <h4 class="page-title">Kaart</h4>

                <p class="lead">Dit is de home pagina waar de game word gespeeld</p>

                <div id="map-canvas"></div>

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
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/buildMap.js"></script>
<script src="assets/js/buildGrid.js"></script>
<script src="assets/js/customMap.js"></script>
<script src="assets/js/getLocation.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>