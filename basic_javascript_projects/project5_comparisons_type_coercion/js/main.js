function Nottrue() {
    document.getElementById("NotT").innerHTML = !(5 > 10); //
}
function Notfalse() {
    document.getElementById("NotF").innerHTML = !(10 > 5); //
}

const value1 = 400;
const value2 = 20;
X = 10;
Y = 10;
C = 82;
B = "82";
document.write(X + B);
document.write("<br>");
document.write(value1 + value2);
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(-3E310);
document.write("<br>");
document.write(69 > 1);
document.write("<br>");
document.write(69 < 1);
document.write("<br>");
console.log(4 > 5);
document.write("<br>");
document.write("<br>");
document.write(10 == 10); // true matching data type/value
document.write("<br>");
document.write(B === X); // false differnt data type & value
document.write("<br>");
document.write(C === B); // false same value diff data type
document.write("<br>");
document.write(X === C); // false becuase differnt value 
document.write("<br>");
document.write("<br>");
document.write(5 > 2 && 10 > 4); //true 
document.write("<br>");
document.write(5 > 2 && 10 > 4);// true
document.write("<br>");
document.write(5 > 10 && 10 > 4); // false 
document.write("<br>");
document.write(5 > 10 || 10 > 4); // true
document.write("<br>");
document.write(5 > 10 || 10 > 20); // false