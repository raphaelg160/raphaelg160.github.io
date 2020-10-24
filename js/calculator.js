function check() {
    // INPUT
    // Insert the number and use the parseFloat to give convert the strings
    let number1 = parseFloat(document.getElementById("number1").value);
    let operation = document.getElementById("options").value;
    let number2 = parseFloat(document.getElementById("number2").value);
    let answer = parseFloat(document.getElementById("answer").value);
    // PROCESSING
    // Generate result from the value given
    let fun;
    let check;
    switch (operation) {
        case "+":
            fun = (number1 + number2)
            if (fun == answer) {
                check = "Correct! 🏆";
            } else {
                check = "Incorrect.Try again!😢";
            }
            break;
        case "-":
            fun = (number1 - number2)
            if (fun == answer) {
                check = "Correct! 🏆";
            } else {
                check = "Incorrect.Try again!😢";
            }
            break;
        case "*":
            fun = (number1 * number2)
            if (fun == answer) {
                check = "Correct! 🏆";
            } else {
                check = "Incorrect.Try again!😢";
            }
            break;
        case "/":
            fun = (number1 / number2)
            if (fun == answer) {
                check = "Correct! 🏆";
            } else {
                check = "Incorrect.Try again!😢";
            }
            break;
    }
    // Output 
    // Get the data to give the result
    document.getElementById("output").innerHTML = check;
}