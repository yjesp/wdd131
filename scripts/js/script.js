document.addEventListener("DOMContentLoaded", function() {
    const temperatureElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("wind-speed");
    const windchillElement = document.getElementById("windchill");
  
    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
  
    function calculateWindChill(temp, windSpeed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }
  
    function displayWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            windchillElement.textContent = calculateWindChill(temp, windSpeed).toFixed(2) + " °C";
        } else {
            windchillElement.textContent = "N/A";
        }
    }
  
    displayWindChill(temperature, windSpeed);
  
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
  });
  
