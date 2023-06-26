/** elabore um programa que leia uma string criando uma função que receba 3 parâmetros e gere uma saída de acordo com o exemplo abaixo. entrada: "acordo com as normas física; "de", [0,21]" saída: "de acordo com as normas de física " usar: vetor condicional e função 

separador: ;  */

//includes splice join

const frm = document.querySelector("form") // Obtendo o formulário do HTML
const resultado = document.querySelector("h4") // Obtendo o elemento <h4> para exibir o resultado
const inFrase = document.getElementById("idFrase"); // Obtendo o campo de entrada do número romano

//inicializando uma função ao clicar no botão
frm.addEventListener("submit", (e) => {

    //impedindo que envie os formularios
    e.preventDefault()

    let frase = inFrase.value;

    if (frase.includes(";")) {
        frase.splice(             )
        resultado.innerText = ""
    }

})
