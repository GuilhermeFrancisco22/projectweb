const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const nota1 = document.getElementById("nota1")
    const nota2 = document.getElementById("nota2")
    const nota3 = document.getElementById("nota3")
    const mediaExercicos = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3
    const notasPeso = Number(nota1.value) + (Number(nota2.value) * 2) + (Number(nota3.value) * 3)
    const mediaFinal = (mediaExercicos + notasPeso) / 7
    let conceito
    if (mediaFinal >= 9) {
        conceito = "A"
    } else if (mediaFinal >= 7.5) {
        conceito = "B"
    } else if (mediaFinal >= 6) {
        conceito = "C"
    } else {
        conceito = "D"
    }
    document.getElementById("media").innerHTML = `${mediaFinal.toFixed(2)} ${conceito}`
})