
/* create a division in body */
/* to add a button container */
var div = document.createElement('div');
div.id = "btns";
div.className = "buttonContainer";
document.body.appendChild(div);

/* add buttons */
var btn;
btn = document.createElement('button');
btn.id = "res";
btn.className = "resultBox";
document.getElementById("btns").appendChild(btn);
// -------------------
// -------------------
for (let i=0; i<2; i++) {
  btn = document.createElement('button');
  btn.id = "btn" + i;
  btn.className = "buttonClass btnForNumbers";
  btn.innerHTML = i;
  document.getElementById("btns").appendChild(btn);
}
// -------------------
// -------------------
btn = document.createElement('button');
btn.id = "btnClr";
btn.className = "buttonClass btnForResults";
btn.innerHTML = "C";
document.getElementById("btns").appendChild(btn);
// -------------------
btn = document.createElement('button');
btn.id = "btnEql";
btn.className = "buttonClass btnForResults";
btn.innerHTML = "=";
document.getElementById("btns").appendChild(btn);
// -------------------
// -------------------
btn = document.createElement('button');
btn.id = "btnSum";
btn.className = "buttonClass btnForOperations";
btn.innerHTML = "+";
document.getElementById("btns").appendChild(btn);
// -------------------
btn = document.createElement('button');
btn.id = "btnSub";
btn.className = "buttonClass btnForOperations";
btn.innerHTML = "-";
document.getElementById("btns").appendChild(btn);
// -------------------
btn = document.createElement('button');
btn.id = "btnMul";
btn.className = "buttonClass btnForOperations";
btn.innerHTML = "*";
document.getElementById("btns").appendChild(btn);
// -------------------
btn = document.createElement('button');
btn.id = "btnDiv";
btn.className = "buttonClass btnForOperations";
btn.innerHTML = "/";
document.getElementById("btns").appendChild(btn);
// -------------------

/* onClick */
var screen = document.getElementById("res")
var operand1 = "";
var operand2;
var operator;
document.getElementById("btn0").addEventListener("click", function() {screen.innerHTML += 0});
document.getElementById("btn1").addEventListener("click", function() {screen.innerHTML += 1});
document.getElementById("btnClr").addEventListener("click", function () {screen.innerHTML = "";});
document.getElementById("btnEql").addEventListener("click", function() {
    // gets vals in calculator
    var binaryNumbers = screen.innerHTML.match(/\d+/g);
    var symbols = screen.innerHTML.match(/[\+\-\*\/]/g);
    // create list to of decimals values
    var numbers = [];
    for (let i=0; i < binaryNumbers.length; i++) {
        numbers.push(parseInt(binaryNumbers[i], 2));
    }
    // total initialized with first number
    var total = parseInt(numbers[0]);
    // with each loop, get value right to symbol
    for (let i=0; i < symbols.length; i++) {
        let nextNumber = parseInt(numbers[i+1]);
        // do algebra with the symbol
        switch (symbols[i]) {
            case '+':
                total += nextNumber;
                break;
            case '-':
                total -= nextNumber;
                break;
            case '*':
                total *= nextNumber;
                break;
            case '/':
                total = Math.floor(total/nextNumber);
                break;
        }
    }
    screen.innerHTML = total.toString(2);
});
document.getElementById("btnSum").addEventListener("click", function() {operator = "+"; screen.innerHTML += "+";});
document.getElementById("btnSub").addEventListener("click", function() {operator = "-"; screen.innerHTML += "-";});
document.getElementById("btnMul").addEventListener("click", function() {operator = "*"; screen.innerHTML += "*";});
document.getElementById("btnDiv").addEventListener("click", function() {operator = "/"; screen.innerHTML += "/";});
