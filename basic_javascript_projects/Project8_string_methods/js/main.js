function full_sentence() { // concat variables to complete a secntace
    var part_1 = "here we";
    var part_2 = " have";
    var part_3 = " a complete";
    var part_4 = " sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function searchh() {
    var str = "Ive lived all over the country but i miss longbeach the most!"; 

}

function slice_method() { // slice function
    var sentence = "all work and no play makes johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section ;
}

const sentence = 'some letter and words put together so we can slice some things.';
var str = "Ive lived all over the country but i miss longbeach the most!"; 



console.log(sentence.toUpperCase());//method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
console.log(str.search("longbeach")); // searching for longbeach in the variable str, returning the result in consol log 

function string_Method() {
    var X =69420;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
function toFixed() { // a function using the toFixed method.The toFixed() method converts a number into a string, rounding to a specified number of decimals.
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("tofixed").innerHTML = n;
  }

function valueof() { // a function using the valueOf method.it returns the value of a string
    document.getElementById("valueof").innerHTML = str.valueOf();  }