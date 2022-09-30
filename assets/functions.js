const userInput = document.getElementById('input');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');


const currentResultElm = document.getElementById('result');
const currentOperationElm = document.getElementById('operation');

function outputResult(result, text) {
  currentResultElm.textContent = result;
  currentOperationElm.textContent = text;
}
