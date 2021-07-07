function dafunction() {
    var str = "heres variable";
    var ing = "heres another varibale "
    var result = str.fontcolor("red");
    document.getElementById("Green_Text").innerHTML = ing + result;
}

function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }

  function myfunction()    { // creating my function 
      var sentence = "some variables/ "; // assigning variables
      sentence += " another variable"; // assigning variables
      document.getElementById("concatenate").innerHTML = sentence; // using getelementbyID to return the variable
  }
