// const btn = document.getElementById("btn");

// btn.addEventListener("click", ()=> {
//   let div = document.createElement("div")
//   div.setAttribute("id", "div1")
//   document.body.appendChild(div)
// });
const minhaDiv = document.getElementById("minha-div");
const buttonAdd = document.getElementById("button");
const userName = document.getElementById("nome");
const userEmail = document.getElementById("email");
const userProfissao = document.getElementById("profissao");
const userMasc = document.getElementById("masculino");
const userFem = document.getElementById("feminino");

buttonAdd.addEventListener("click", () => {
  const div = document.createElement("div");
  minhaDiv.appendChild(div);
  div.classList.add("flip-card");
  div.innerHTML = `    
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img
        src="img/cat.jpg"
        alt="Avatar"
        style="width: 300px; height: 300px"
      />
    </div>
    <div class="flip-card-back">
      <h1>${userName.value}</h1>
      <p>${userEmail.value}</p>
      <p>${userProfissao.value}</p>
    </div>
</div>`;

});
// minhaDiv.addEventListener("click", function () {
//   titulo.textContent = "Mudei mesmo!!";
//   titulo.style.color = "yellow";
//   titulo.style.backgroundColor = "red";
//   minhaDiv.style.borderRadius = "10px";
// });
