function strlenFunction() {  // string length function
    var str = "supercalifragilisticexpialidocious";  
    var n = str.length;  
    document.getElementById("string").innerHTML = n; 
}

function Call_Loop() {  //while loop
    var clothing = ["Polo", "Shorts", "Sandlas", "Gucci Belt"];  
    var text = "";  
    var i = 0;  
    while (i < clothing.length) {  
        text += clothing[i] + "<br>";
        i++;  
        }
    document.getElementById("Loop").innerHTML = text;  
}

function for_Loop() {   // for loop 
    const instruments = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod"];  //Declares array elements
    let text = "";  
    for (let i = 0; i < instruments.length; i++) {  
    text += instruments[i] + "<br>";  
    }
    document.getElementById("List_of_Tools").innerHTML = text;  
}

function array_Function() {  //function w array & let keywords
    let arr = ["Gender: Female", "Age: 27", "Height: 6'", "Weight: 125 lbs", "Hair Color: purple?"]; 
    alert( arr[0]); 
    alert( arr[1]);  
    alert( arr[2]); 
    alert( arr[3]);  
    alert( arr[4]); 
    document.getElementById("Array").innerHTML = arr;  
}

function constant_Function() {  //constant array,property add, property change
    const car = {type:"Ford", model:"Focus", color:"Yellow"}; 
    car.color = "Orange";  
    car.owner = "Brandon Andersen";  
    document.getElementById("Constant").innerHTML = "The car is a " + car.color + " " + car.type + " " + car.model +  " " + "and the owner is " + car.owner + ".";  
}

var x = returnFunction(12, 5);  // variable for return

function returnFunction(a, b) {  // return function
    return a * b;  
    }
    document.getElementById("Return").innerHTML = x;  

let carz = {   // variable for let return
    make: "Ferarri ",  
    model: "X420-69", 
    year: "2021 ",
    description : function() {  
        return "The most crucial car of " + this.year + "is the " + this.make + this.model + "."; 
    }
};
document.getElementById("Carz").innerHTML = carz.description(); 

function breakFunction() {  
    var text = "";  
    var i;  
    for (i = 0; i < 10; i++) {  
        if (i === 7) {  
            break; 
        }
    text += "The number is " + i + "!" + "<br>";  
    }
    document.getElementById("Break").innerHTML = text; 
}

function continueFunction() {  // break function
    var text = "";  
    var i = 0;  
    while (i < 10) {  
        i++;   
        if (i === 7) {  
            continue;  
        }
    text += "<br> The number is " + i;  
    }
    document.getElementById("Continue").innerHTML = text;  // call to display
}