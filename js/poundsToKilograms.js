function poundsToKilograms() {
    //INPUT
    let pounds = parseFloat(document.getElementById("pounds").value)

    //PROCESSING
    // conversion factor pounds to kilograms is   
    let kilograms = pounds * .453592;

    //OUTPUT
    document.getElementById('output').textContent = kilograms.toFixed(1) + " Kilograms";
}