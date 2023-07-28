// var nome = "Gui";
// let idade = 18;
// const anoNascimento = 2005;

// let lista = [1,2,3,4,5,6]

// for (let index = 0; index < lista.length; index++) {
//     const element = lista[index];
//     console.log(element)
// }

const titulo = document.getElementById("titulo");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");

console.log(titulo.textContent);

titulo.textContent = "Senai Cotia 2023"

function salvar() {
    resultado1.textContent = nome.value
    resultado2.textContent = email.value
    resultado3.textContent = telefone.value
}