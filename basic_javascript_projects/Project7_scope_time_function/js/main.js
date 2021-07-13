var Y = 100 // global variable 

function humbolt() { //creating a function
    var X = 400; // local variable 
    console.log(X + 20);
}

function global_variable() { // function with an error in it
    console.log(Y + X); 
}
humbolt()
global_variable()


function get_Date() { // function using date.gethours
    var time = new Date().getHours();
    if (time < 20) {
      document.getElementById("Gday").innerHTML = "Good day";
    }
  }

function Age_Function() { 
        let age = document.getElementById("age").value;
        let voteable = (age < 18) ? "Too young":"Old enough";
        document.getElementById("yayornay").innerHTML = voteable + " to vote.";
}

function Time_Function() { // function with else and else is statements.
    var Time = new Date().getHours() ;
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "its morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "its afternoon.";
    }
    else {
        Reply = "its evening time";
    }
    document.getElementById('Time_of_day').innerHTML = Reply;
}

function show_date() {  // function to get todays date
    var in_date = new Date();
    var str=in_date.getDate() +'/'+(in_date.getMonth()+1)+'/'+in_date.getFullYear()
    document.getElementById('date').innerHTML=str
    }