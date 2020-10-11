function addNumbers() {
    // INPUT - get two number and convert the input strings to numbers using parseFloat;
        let number1 = parseFloat(document.getElementById("number1").value);
        let number2 = parseFloat(document.getElementById("number2").value);
    // PROCESSING
      // add two numbers together and store in my output variable
      let sum = number1 + number2;

    // OUTPUT
    document.getElementById("output").innerHTML = "The <b><i>math magic is</i></b> " + sum + "!✨";          
}