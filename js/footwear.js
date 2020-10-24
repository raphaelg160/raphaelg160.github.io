function getShoes() {
    // input weather from combo box
    let weather = document.getElementById("weather").value;
    // processing generate result from the value given
    if (weather === "hot") {
        shoes = "sandals"
    } else if (weather === "rain") {
        shoes = "galoshes"
    } else if (weather === "snow") {
        shoes = "boots"
    } else {
        shoes = "unknown"
    }
    // Output get the data to give the result
    document.getElementById("output").innerHTML = shoes;
}