//Criar referências aos elementos da pagina

const frm = document.querySelector("form")
const outSimNao = document.querySelector("h3")
const outTipo = document.querySelector("h4")

const inLadoA = document.getElementById("inLadoA");
const inLadoB = document.getElementById("inLadoB");
const inLadoC = document.getElementById("inLadoC");

//adicionando uma ação de click ao button

frm.addEventListener("submit", (e) => {
    
    outTipo.innerText = ""
    outSimNao.innerText = ""

    //converter os dados de entrada para número
    let ladoA = Number(frm.inLadoA.value);
    let ladoB = Number(frm.inLadoB.value);
    let ladoC = Number(frm.inLadoC.value);

    //evita o envio do formulario
    e.preventDefault();

    /* Verificar se os valores são números válidos
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        outSimNao.innerText = "Por favor, insira valores numéricos para os lados do triângulo.";
        return; // Encerrar a função aqui se os valores não forem numéricos
    } */

    //cria as condições para exibir a resposta
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB ) {
        outSimNao.innerText = "Lados não podem formar um triângulo";
    } 

    else {
        outSimNao.innerText = "Lados podem formar um triângulo";

        //verificar qual é o tipo do triângulo
        if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
            outTipo.innerText = "Esse triângulo é Equilátero";
            outTipo.style.color = "red";
        }

        else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
            outTipo.innerText = "Esse triângulo é Isósceles";
            outTipo.style.color = "blue";
        } 
        else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
            outTipo.innerText = "Esse triângulo é Escaleno";
            outTipo.style.color = "green";
        }
    }
})
