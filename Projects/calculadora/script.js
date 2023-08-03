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

// function calculo(operacao) {
//   if (operacao === "somar") {
//     resultado.textContent = Number(number1.value) + Number(number2.value);
//   } else if (operacao === "subtrair") {
//     resultado.textContent = Number(number1.value) - Number(number2.value);
//   } else if (operacao === "dividir") {
//     resultado.textContent = Number(number1.value) / Number(number2.value);
//   } else if (operacao === "multiplicar") {
//     resultado.textContent = Number(number1.value) * Number(number2.value);
//   }
// }

// function calculo(operacao) {
//   switch (operacao) {
//     case "+":
//       resultado.textContent = Number(number1.value) + Number(number2.value);
//       break;
//     case "-":
//       resultado.textContent = Number(number1.value) - Number(number2.value);
//       break;
//     case "/":
//       resultado.textContent = Number(number1.value) / Number(number2.value);
//       break;
//     case "*":
//       resultado.textContent = Number(number1.value) * Number(number2.value);
//       break;

//     default:
//       break;
//   }
// }

function calculo(operacao) {
  try {
    const finalResultado = eval(
      "Number(number1.value)" + operacao + "Number(number2.value)"
    );
    if (isNaN(finalResultado) || !isFinite(finalResultado)) {
      alert("Error!");
      return;
    }
    resultado.textContent = finalResultado;
    if (finalResultado <= 0) {
      resultado.style.color = "red";
    } else if (finalResultado <= 50) {
      resultado.style.color = "blue";
    } else if (finalResultado > 100) {
      resultado.style.color = "green";
    }
  } catch (error) {
    alert("ERROR!");
  }
}
