function count_To_hundred() {
    var Digit = "";
    var X = 1;
    while (X < 101) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}