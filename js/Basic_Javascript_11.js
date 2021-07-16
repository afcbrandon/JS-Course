function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "the text has changed";
}
function Draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}



function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal"
    switch(Animals) {
        case "dog":
            Animal_Output = "a " + "dog" + Animal_String;
        break;
        case "cat":
            Animal_Output = "a " + "cat" + Animal_String;
        break;
        case "fish":
            Animal_Output = "a " + "fish" + Animal_String;
        break;
        case "turtle":
            Animal_Output = "a " + "turtle" + Animal_String;
        break;
        case "pig":
            Animal_Output = "a " + "pig" + Animal_String;
        break;
        case "squirell":
            Animal_Output = "a " + "squirell" + Animal_String;
        break;
        default:
            Animal_Output = "please enter an animal exactly as written on the above list. ";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}