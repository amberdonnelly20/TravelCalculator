//Travel calculator that divides distance by average MPH to
//obtain the time traveled.

const calculator = {
  divide(a, b) {
    return a / b;
  }
};

const form = document.querySelector("form");
const distance = document.querySelector("#distance");
const mph = document.querySelector("#mph");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  console.log(calculator.divide(distance.value, mph.value));
});
