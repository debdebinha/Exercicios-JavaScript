//Criar referências aos elementos da pagina

const frm = document.querySelector("form")
const outTempo = document.querySelector("h4")
const outTroco = document.querySelector("h5")

const inValor = document.getElementById("inValor");

//Adicionando uma ação de click ao button
frm.addEventListener("submit", (e) => {

  let tempo = 0
  let resto = 0
  let vezes = 0

  outTempo.innerText = ""
  outTroco.innerText = ""

  let valor = Number(frm.inValor.value);

  //evita o envio do formulario
  e.preventDefault();

  //Verificar se os valores são números válidos
  if (valor == 0) {
    alert("Digite um valor corretamente");
    inValor.value = ""; //Limpa o campo de entrada
    inValor.focus(); //Dá foco ao campo de entrada novamente

  } else {

    if (valor >= 3) { // Verifica se o valor é maior ou igual a 3
      resto = valor % 3 
      vezes = (valor - resto) / 3
      tempo = tempo + (vezes * 120)
      valor = resto
    }

    if (valor >= 1.75) { // Verifica se o valor é maior ou igual a 1.75
      resto = valor % 1.75
      vezes = (valor - resto) / 1.75
      tempo = tempo + (vezes * 60)
      valor = resto
    }

    if (valor >= 1) { // Verifica se o valor é maior ou igual a 1
      resto = valor % 1
      vezes = (valor - resto) / 1
      tempo = tempo + (vezes * 30)
      valor = resto
    }

    inValor.value = "" //Limpa o campo de entrada
    inValor.focus() //Dá foco ao campo de entrada novamente

    outTempo.innerText = "Minutos Disponíveis: " + tempo
    outTroco.innerText = "Troco: R$ " + resto.toFixed(2) //toFixed() arredonda o número para cima
  }

})
