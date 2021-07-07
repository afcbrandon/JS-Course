function ASqaudDictionary() { //setting the function name to ASqaudDictionary
    var squad = { // naming the variable squad
        gangmember: "adam",
        dealer: "jesse",
        boss: "brandon",
        crew: "lxix",
        whatwerebout: "getting paper and cool things."
    };
    delete squad.whatwerebout; // deleting the key whatwerebout
    document.getElementById("Dictionary").innerHTML = squad.boss // returns the key of boss
}