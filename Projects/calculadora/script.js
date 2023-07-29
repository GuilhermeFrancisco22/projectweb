const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const resultado = document.getElementById("resultado");

// function soma() {
//   resultado.textContent = Number(number1.value) + Number(number2.value);
// }
// function subtrair() {
//   resultado.textContent = Number(number1.value) - Number(number2.value);
// }
// function dividir() {
//   resultado.textContent = Number(number1.value) / Number(number2.value);
// }
// function multiplicar() {
//   resultado.textContent = Number(number1.value) * Number(number2.value);
// }

function calculo(operacao) {
  if (operacao === "somar") {
    resultado.textContent = Number(number1.value) + Number(number2.value);
  } else if (operacao === "subtrair") {
    resultado.textContent = Number(number1.value) - Number(number2.value);
  } else if (operacao === "dividir") {
    resultado.textContent = Number(number1.value) / Number(number2.value);
  } else if (operacao === "multiplicar") {
    resultado.textContent = Number(number1.value) * Number(number2.value);
  }
}
