function myDate() {
    // Input 
    // Insert number information to determine if can sleep in or not
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    // Processing
    // Provide the sleep in or not message
    let = message;
    if ((month === "0" && dayOfMonth === "1") || (month === "7" && dayOfMonth === "4") || (month === "11" && dayOfMonth === "25")) {
        message = "Sleep in."
    } else if ((dayOfWeek === "0" && dayOfWeek === "6")) {
        message - "Sleep in."
    }    else {
        message = "Get up!"
    }
    // Output
    document.getElementById("output").innerHTML = message;
}