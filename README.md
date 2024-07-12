<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Review Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Product Review Form</h1>
    </header>

    <main>
        <form action="review.html" method="get" id="reviewForm">
            <div class="form-group">
                <label for="productName">Product Name:</label>
                <select id="productName" name="productName" required>
                    <option value="" disabled selected>Select a Product ...</option>
                </select>
            </div>

            <div class="form-group">
                <label>Overall Rating:</label>
                <div class="rating">
                    <input type="radio" id="star5" name="rating" value="5" required><label for="star5" title="5 stars">&#9733;</label>
                    <input type="radio" id="star4" name="rating" value="4" required><label for="star4" title="4 stars">&#9733;</label>
                    <input type="radio" id="star3" name="rating" value="3" required><label for="star3" title="3 stars">&#9733;</label>
                    <input type="radio" id="star2" name="rating" value="2" required><label for="star2" title="2 stars">&#9733;</label>
                    <input type="radio" id="star1" name="rating" value="1" required><label for="star1" title="1 star">&#9733;</label>
                </div>
            </div>

            <div class="form-group">
                <label for="installationDate">Date of Installation:</label>
                <input type="date" id="installationDate" name="installationDate" required>
            </div>

            <div class="form-group">
                <label>Useful Features:</label>
                <div>
                    <input type="checkbox" id="feature1" name="usefulFeatures" value="Feature 1">
                    <label for="feature1">Feature 1</label>
                </div>
                <div>
                    <input type="checkbox" id="feature2" name="usefulFeatures" value="Feature 2">
                    <label for="feature2">Feature 2</label>
                </div>
                <div>
                    <input type="checkbox" id="feature3" name="usefulFeatures" value="Feature 3">
                    <label for="feature3">Feature 3</label>
                </div>
                <!-- Add more features as needed -->
            </div>

            <div class="form-group">
                <label for="writtenReview">Written Review:</label>
                <textarea id="writtenReview" name="writtenReview"></textarea>
            </div>

            <div class="form-group">
                <label for="userName">User Name:</label>
                <input type="text" id="userName" name="userName">
            </div>

            <div class="form-group">
                <input type="submit" value="Submit Review">
            </div>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 Product Reviews</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
