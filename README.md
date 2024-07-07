<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beautiful Place</title>
    <link rel="stylesheet" href="css/styles.css">
    <script defer src="js/script.js"></script>
</head>
<body>
    <header>
        <h1>Beautiful Place</h1>
        <nav>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#weather">Weather</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="hero">
            <picture>
                <source srcset="images/hero-large.webp" media="(min-width: 800px)">
                <source srcset="images/hero-medium.webp" media="(min-width: 400px)">
                <img src="images/hero-small.webp" alt="Beautiful Place">
            </picture>
            <div id="hero-text">
                <h2>Current Weather</h2>
                <p>Temperature: <span id="temperature">10°C</span></p>
                <p>Wind speed: <span id="wind-speed">5 km/h</span></p>
                <p>Windchill: <span id="windchill">N/A</span></p>
            </div>
        </section>
        <section id="overview">
            <h2>Overview</h2>
            <p>This is an overview of the beautiful place...</p>
        </section>
        <section id="gallery">
            <h2>Gallery</h2>
            <div class="gallery-images">
                <img src="images/gallery1.jpg" alt="Gallery Image 1">
                <img src="images/gallery2.jpg" alt="Gallery Image 2">
                <img src="images/gallery3.jpg" alt="Gallery Image 3">
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; <span id="current-year"></span></p>
        <p>Last modified: <span id="last-modified"></span></p>
    </footer>
</body>
</html>
