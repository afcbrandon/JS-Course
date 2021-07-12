function Age_Function() { //creating a function
    var Age, Can_Vote;
    Age = document.getElementById("Age").value; // assigning variable
    Can_Vote = (Age < 21) ?"Not old enough": "old enough";
    document.getElementById("Age2").innerHTML = Can_Vote + " to drink";
}

function Vehicle(Make, Model, Year, Color) { // function using this 
    this.Vehicle_make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // asigning variables with new function
var Erik = new Vehicle("Jeep", "Trail Hawk", 2020, "Yellow");
var Emily = new Vehicle("Ford", "Pinto", 1971, "Green");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function New() {
    document.getElementById("New_and_This").innerHTML = "aye yall"
}

function count_Function() { // nested function 
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
