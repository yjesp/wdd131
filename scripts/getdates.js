// getdates.js

document.addEventListener("DOMContentLoaded", function() {
  // Get current year and populate footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Get last modified date and populate footer
  document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});
