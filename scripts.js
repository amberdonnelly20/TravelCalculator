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
const output = document.querySelector("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  output.textContent = calculator["divide"](distance.value, mph.value);
});
