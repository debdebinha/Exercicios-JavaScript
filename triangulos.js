
//declarando os h3 e h4 p ser possível colocar corzinha top
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {

    //evita o envio do formulario
    e.preventDefault();

    //converter os dados de entrada para número
    let ladoA = Number(frm.inLadoA.value);
    let ladoB = Number(frm.inLadoB.value);
    let ladoC = Number(frm.inLadoC.value);

    //cria as condições para exibir a resposta
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        outSimNao.innerText = "Lados não podem formar um triângulo"
        outTipo.innerText = ""

    } else {
        outSimNao.innerText = "Lados podem formar um triângulo"

        //verificar qual é o tipo do triângulo
        if (ladoA == ladoB && ladoA == ladoC) { //Equilátero
            outTipo.innerText = "Esse triângulo é Equilátero"
            outTipo.style.color = "red"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) { //Isósceles
            outTipo.innerText = "Esse triângulo é Isósceles"
            outTipo.style.color = "blue"
        } else (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) //Escaleno
            outTipo.innerText = "Esse triângulo é Escaleno"
            outTipo.style.color = "green"
    }

}
)