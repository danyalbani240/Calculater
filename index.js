let operator = "";
let operateOne = "";
let operateTwo = "";
let displayElement = document.querySelector(".display");
let calculate = document.querySelector(".calculate");
let phrase = `${operateOne} ${operator} ${operateTwo}`;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
//set the numbers

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    if (operator == false) {
      operateOne = numbers[i].textContent;
      if (operateOne == "0") {
        operateOne = "";
      }
      phrase += `${operateOne}`;
    } else {
      operateTwo = numbers[i].textContent;
      if (operateTwo == "0") {
        operateTwo = "";
      }
      phrase += `${operateTwo}`;
    }
  });
}

//set Operator
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (operateOne == "") {
    } else {
      operator = "";
      operator = operators[i].textContent;
      phrase += `${operator}`;
    }
  });
}
calculate.addEventListener("click", () => {
  let result = eval(phrase);
  displayElement.textContent = result;
  phrase = "";
});
