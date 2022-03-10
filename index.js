const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handlerInput(maskNumber, e.key, cardNumber);
  inputCard.value = cardNumber.join("");
});

inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handlerInput(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join("");
});
inputCVV.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    return;
  }
  e.preventDefault();
  handlerInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join("");
});

function handlerInput(mask, key, array) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (key === "Backspace" && array.length > 0) {
    array.pop();
    return;
  }
  if (numbers.includes(key) && array.length + 1 <= mask.length) {
    if (mask[array.length] == "-" || mask[array.length] == "/") {
      array.push(mask[array.length], key);
    } else {
      array.push(key);
    }
  }
}
