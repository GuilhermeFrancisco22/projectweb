let morango = document.getElementById("morango")
let maca = document.getElementById("maca")
let total = document.getElementById("total")
let btn = document.querySelector(".btn")

function comprar() {
    btn.style.color = "#fff"
    btn.style.background = "#be0202"
    let pesoMorango = Number(morango.value)
    let pesoMaca = Number(maca.value)
    let resultMorango
    let resultMaca
    if (pesoMorango <= 5) {
        resultMorango = pesoMorango * 2.5
    } else {
        resultMorango = pesoMorango * 2.2
    }
    if (pesoMaca <= 5) {
        resultMaca = pesoMaca * 1.8
    } else {
        resultMaca = pesoMaca * 1.5
    }
    let pesoTotal = pesoMorango + pesoMaca
    let valorTotal = resultMorango + resultMaca
    if (pesoTotal >= 8 || valorTotal >= 25) {
        let descont = valorTotal - (valorTotal / 10)
        total.textContent = descont
    } else {
        total.textContent = valorTotal
    }
}