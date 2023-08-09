//Criar objetos em Javascript
//1.Forma - literal
const userName = document.getElementById("name");
const prod = document.getElementById("product");
const color = document.getElementById("cor");
const button = document.getElementById("btn");
const dataInput = document.getElementById("date").value;
const person = {
  name: "Samuel Santos",
  born: 2005,
  month: 9,
  weight: "98kb",
  gender: "Mininu",
  height: 1.83,
  family: {
    wife: "Dora Santos",
    son: "Felipe Santos",
    son2: "Luis Antônio",
  },
  cars: ["Dodge", "Fit", "Hillux", "BMW", "Ferrari"],
  work: {
    company: "Senai SP",
    address: "Rua Direita, 222",
    ocuppation: "Instrutor PIII",
    salary: "R$116.235,89",
  },
  calcAge: function () {
    const currentDate = new Date(Date.now());
    const currentMes = new Date(Date.now());
    if (currentMes.getMonth() <= person.month) {
      return currentDate.getFullYear() - this.born;
    } else {
      return currentDate.getFullYear() - this.born--;
    }
  },
};

let produto = {};
let produtos = [];

button.addEventListener("click", () => {
  produto = {
    //Gera id randomico
    id: Math.floor(Math.random() * 21),
    name: prod.value,
    color: color.value,
  };
  //Método de adicionar dade em uma lista
  produtos.push(produto);
  console.log(produtos);
  console.log(person.calcAge());
});

userName.textContent = person.name;
const userDATE = document.createElement("h1");
userDATE.innerHTML = person.calcAge();
document.body.appendChild(userDATE);
