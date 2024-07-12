// Product array
const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
  { id: 4, name: "Product D" }
];

// Populate product options dynamically
document.addEventListener("DOMContentLoaded", function() {
  const productNameSelect = document.getElementById("productName");
  
  products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
  });
});

// Count reviews using localStorage
const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", function() {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
});
