// @ts-nocheck
const range = document.querySelector(".range input");
const e1 = document.querySelector(".e1");
const e2 = document.querySelector(".e2");
const e3 = document.querySelector(".e3");
const e4 = document.querySelector(".e4");
const e5 = document.querySelector(".e5");
const e6 = document.querySelector(".e6");
const e7 = document.querySelector(".e7");
const e8 = document.querySelector(".e8");
const sumShow = document.querySelector(".calc__price-sum");
const areaRange = document.querySelector(".range2 input");
const resultInput = document.querySelector(".calc__area input");
const values = document.querySelectorAll(".value__item");
const coefficientValues = document.querySelectorAll(".radio");
let coefficient = 0;
let price = 0;
let rangeValue = 0;

e1.addEventListener("click", () => {
  e1.classList.add("hide");
  e2.classList.remove("hide");
  e3.classList.remove("hide");
  e4.classList.add("hide");
  e5.classList.remove("hide");
  e6.classList.add("hide");
  e7.classList.remove("hide");
  e8.classList.add("hide");
  range.value = 1;
});

e3.addEventListener("click", () => {
  e1.classList.remove("hide");
  e2.classList.add("hide");
  e3.classList.add("hide");
  e4.classList.remove("hide");
  e5.classList.remove("hide");
  e6.classList.add("hide");
  e7.classList.remove("hide");
  e8.classList.add("hide");
  range.value = 2;
});

e5.addEventListener("click", () => {
  e1.classList.remove("hide");
  e2.classList.add("hide");
  e3.classList.remove("hide");
  e4.classList.add("hide");
  e5.classList.add("hide");
  e6.classList.remove("hide");
  e7.classList.remove("hide");
  e8.classList.add("hide");
  range.value = 3;
});

e7.addEventListener("click", () => {
  e1.classList.remove("hide");
  e2.classList.add("hide");
  e3.classList.remove("hide");
  e4.classList.add("hide");
  e5.classList.remove("hide");
  e6.classList.add("hide");
  e7.classList.add("hide");
  e8.classList.remove("hide");
  range.value = 4;
});

//===================================

if (+range.value === 3) {
  e5.classList.add("hide");
  e6.classList.remove("hide");
}
range.addEventListener("input", () => {
  if (+range.value === 1) {
    e1.classList.add("hide");
    e2.classList.remove("hide");
    e3.classList.remove("hide");
    e4.classList.add("hide");
    e5.classList.remove("hide");
    e6.classList.add("hide");
  }
  if (+range.value === 2) {
    e1.classList.remove("hide");
    e2.classList.add("hide");
    e3.classList.add("hide");
    e4.classList.remove("hide");
    e5.classList.remove("hide");
    e6.classList.add("hide");
  }
  if (+range.value === 3) {
    e3.classList.remove("hide");
    e4.classList.add("hide");
    e5.classList.add("hide");
    e6.classList.remove("hide");
    e7.classList.remove("hide");
    e8.classList.add("hide");
  }
  if (+range.value === 4) {
    e5.classList.remove("hide");
    e6.classList.add("hide");
    e7.classList.add("hide");
    e8.classList.remove("hide");
  }
});

//====================================

if (resultInput.value === "" || resultInput.value === 0) {
  resultInput.value = `${areaRange.value}м`;
  rangeValue = parseInt(resultInput.value);
}

function getResult() {
  if ((price * rangeValue) / coefficient) {
    (price * rangeValue) / coefficient;
    sumShow.innerText = Math.ceil((price * rangeValue) / coefficient) + " руб";
  }
  if (coefficient === 0) {
    sumShow.innerText = "";
  }
}

areaRange.addEventListener("input", () => {
  resultInput.value = `${areaRange.value}м`;
  rangeValue = parseInt(resultInput.value);
  getResult();
});

resultInput.addEventListener("input", (e) => {
  areaRange.value = parseInt(e.target.value);
  rangeValue = parseInt(e.target.value);
  getResult();
});

function calc() {
  coefficientValues.forEach((elem) => {
    elem.addEventListener("click", () => {
      coefficient = +elem.querySelector("input").value;
      if ((price * rangeValue) / coefficient) {
        sumShow.innerText =
          Math.ceil((price * rangeValue) / coefficient) + " руб";
      }
    });
  });
  values.forEach((el) => {
    el.addEventListener("click", () => {
      price = +el.querySelector("input").value;
      getResult();
    });
  });
}
calc();

areaRange.addEventListener("change", calc);
const calcPrice = document.querySelector(".calc__price");
const calcRadio = document.querySelector(".calc__radio");
if (window.innerWidth <= 1025) {
  calcRadio.insertAdjacentElement("afterend", calcPrice);
}
