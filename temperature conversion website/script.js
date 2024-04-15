function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");

    // Clear previous result and error messages
    result.textContent = "";
    result.classList.remove("error");

    // Validate input
    if (temperatureInput.trim() === "") {
        result.textContent = "Please enter a temperature.";
        result.classList.add("error");
        return;
    }

    if (isNaN(temperatureInput)) {
        result.textContent = "Please enter a valid number.";
        result.classList.add("error");
        return;
    }

    temperatureInput = parseFloat(temperatureInput);

    var convertedTemperature;
    var convertedUnit;

    // Perform temperature conversion
    switch(unitSelect) {
        case "celsius":
            convertedTemperature = temperatureInput;
            convertedUnit = "Celsius";
            break;
        case "fahrenheit":
            convertedTemperature = (temperatureInput * 9/5) + 32;
            convertedUnit = "Fahrenheit";
            break;
        case "kelvin":
            convertedTemperature = temperatureInput + 273.15;
            convertedUnit = "Kelvin";
            break;
    }

    // Display the converted temperature
    result.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
