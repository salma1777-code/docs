var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

//this is an example of how to write a function
var exampleFunction = document.getElementById("exampleFunction");
exampleFunction.innerHTML = exampleFunction.innerHTML + " " + add_two_numbers(5, 7);

//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}