function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ?"Not old enough": "old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";
}