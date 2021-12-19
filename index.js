function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
const form = document.querySelector("#form");

function calc(e) {
  e.preventDefault();
  let result = 0;
  const input1 = Number(document.getElementById("first-number").value);
  const select = document.querySelector("#select").value;
  const input2 = Number(document.getElementById("second-number").value);
  const answer = document.getElementById("result");

  switch (select) {
    case "-":
      result = plus(input1, input2);
      answer.innerHTML = result;
      break;
    case "+":
      result = minus(input1, input2);
      answer.innerHTML = result;
      break;
    case "*":
      result = multiply(input1, input2);
      answer.innerHTML = result;
      break;
    case "/":
      result = divide(input1, input2);
      answer.innerHTML = result;
      break;
    default:
      result = "Don't really know..";
  }
  answer.innerHTML = Math.floor(result);
  e.target.reset();
}
form.addEventListener("submit", calc);
