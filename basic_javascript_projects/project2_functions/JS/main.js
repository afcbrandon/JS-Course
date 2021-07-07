function dafunction() { // creating a function namned dafunction
    var str = "heres variable"; // assigning values to variable
    var ing = "heres another varibale " // assigning values to variable
    var result = str.fontcolor("red"); //using fontcolor to establish the color
    document.getElementById("Green_Text").innerHTML = ing + result; //using getelementbyid to display the variables 
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
