var one, symbol;
var two = "";

function updateDisplay(num) {
 if (symbol) {
  document.getElementById("display").innerHTML += num;
  two += num;
 } else if (document.getElementById("display").innerHTML == 0 || document.getElementById("display").innerHTML == "Error") {
  document.getElementById("display").innerHTML = num;
  one = document.getElementById("display").innerHTML;
 } else {
  document.getElementById("display").innerHTML += num;
  one = document.getElementById("display").innerHTML;
 }
}

function clearNum() {
 document.getElementById("display").innerHTML = 0;
}

function enter() {
 if (symbol) {
  document.getElementById("display").innerHTML = combineMath();
 } else {
  document.getElementById("display").innerHTML = "Error";
 }
}

function combineMath() {
 let sum;
 if (symbol == "+") {
  sum = parseFloat(one) + parseFloat(two);
 } else if (symbol == "-") {
  sum = parseFloat(one) - parseFloat(two);
 } else if (symbol == "*") {
  sum = parseFloat(one) * parseFloat(two);
 } else if (symbol == "/") {
  sum = parseFloat(one) / parseFloat(two);
 }
 one = sum;
 two = "";
 return sum;
}

function sign(math) {
 symbol = math;
 if (symbol) {
  document.getElementById("display").innerHTML = `${one} ${math} `;
 } else {
  document.getElementById("display").innerHTML += `${one} ${math} `;
 }
}
