<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtered Temple Album</title>
    <link rel="stylesheet" href="styles/filtered-temples.css">
    <link rel="stylesheet" href="styles/filtered-temples-large.css" media="(min-width: 768px)">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <script defer src="scripts/filtered-temples.js"></script>
</head>
<body>
    <header>
        <h1>Temple Album</h1>
        <nav>
            <button id="hamburger">&#9776;</button>
            <ul id="menu">
                <li><a href="#" data-filter="home">Home</a></li>
                <li><a href="#" data-filter="old">Old</a></li>
                <li><a href="#" data-filter="new">New</a></li>
                <li><a href="#" data-filter="large">Large</a></li>
                <li><a href="#" data-filter="small">Small</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Home</h2>
        <div id="temple-cards" class="gallery"></div>
    </main>
    <footer>
        <p>&copy; <span id="year"></span> Temple Album. All rights reserved.</p>
        <p>Last modified: <span id="lastModified"></span></p>
    </footer>
</body>
</html>


