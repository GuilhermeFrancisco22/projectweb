let btns = document.createElement("div");
let divColor = document.createElement("div");
divColor.classList.add("divColor");
const listaCor = [
  { id: "red" },
  { id: "blue" },
  { id: "green" },
  { id: "purple" },
  { id: "cyan" },
  { id: "gold" },
];
for (let index = 0; index < listaCor.length; index++) {
  const { id } = listaCor[index];
  btns.innerHTML += `<button id="${id}">${id}</button>`;
}
document.body.appendChild(btns);
btns.appendChild(divColor);
document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    divColor.style.background = element.id;
  });
});
