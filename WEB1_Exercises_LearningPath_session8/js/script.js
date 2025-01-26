//write your code below this line
var myArray  =["red", "blue", "green", "black", "white"];
var tempStri ="";


for (let i = 0; i<myArray.length;++i) {
    tempStri += myArray[i] + "<br>";
}
var color = document.getElementById("textfield");
color.innerHTML = tempStri;

var randno = Math.floor(Math.random() * myArray.length);
var textf = document.getElementById("counter1Id");
textf.innerHTML = myArray[randno];

var color = document.getElementById("textfield");
color.innerHTML = tempStri;

var firstDate = new Date(2024, 10, 31);
var secondDate = new Date(2018, 0, 1);

var dateDifference = firstDate - secondDate;
var textf = document.getElementById("date");
textf.innerHTML = dateDifference;
var daysDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
textf.innerHTML = daysDifference;


var textf = document.getElementById("date1");
var evenOrOdd = (daysDifference % 2 === 0) ? "even" : "odd";
textf.innerHTML += `<br>The number of days is ${evenOrOdd}.`;