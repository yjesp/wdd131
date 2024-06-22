<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temple Album</title>
    <link rel="stylesheet" href="styles/temples.css">
    <link rel="stylesheet" href="styles/temples-large.css" media="(min-width: 768px)">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <script defer src="scripts/temples.js"></script>
</head>
<body>
    <header>
        <h1>Temple Album</h1>
        <nav>
            <button id="hamburger">&#9776;</button>
            <ul id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Old</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Large</a></li>
                <li><a href="#">Small</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Home</h2>
        <div class="gallery">
            <figure>
                <img src="images/temple1.jpg" alt="Temple 1">
                <figcaption>Temple 1</figcaption>
            </figure>
            <!-- Add 8 more figure elements with temple images and captions here -->
        </div>
    </main>
    <footer>
        <p>&copy; <span id="year"></span> Temple Album. All rights reserved.</p>
        <p>Last modified: <span id="lastModified"></span></p>
    </footer>
</body>
</html>

