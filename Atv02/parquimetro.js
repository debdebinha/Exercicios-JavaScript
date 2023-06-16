//Criar referências aos elementos da pagina

const frm = document.querySelector("form")
const outTempo = document.querySelector("h4")
const outTroco = document.querySelector("h5")

const inValor = document.getElementById("inValor");

//adicionando uma ação de click ao button

frm.addEventListener("submit", (e) => {

    let tempo = 0;
  
    outTempo.innerText = "";
    outTroco.innerText = "";
  
    let valor = parseFloat(inValor.value); // Obtém o valor digitado e converte para um número float
  
    //evita o envio do formulário
    e.preventDefault();
  
    //Verificar se os valores são números válidos
    if (valor === 0 || isNaN(valor)) {
      alert("Digite um valor corretamente");
      inValor.value = ""; //Limpa o campo de entrada
      inValor.focus(); //Dá foco ao campo de entrada novamente

    } else {
      if (valor >= 3) { // Verifica se o valor é maior ou igual a 3
        tempo += 120;
        valor -= 3;

      } else if (valor >= 1.75) { // Verifica se o valor é maior ou igual a 1.75
        tempo += 60;
        valor -= 1.75;

      } else if (valor >= 1) { // Verifica se o valor é maior ou igual a 1
        tempo += 30;
        valor -= 1;
      }
  
      inValor.value = ""; //Limpa o campo de entrada
      inValor.focus(); //Dá foco ao campo de entrada novamente
  
      if (tempo === 0) {
        outTempo.innerText = "Valor Insuficiente";
      } else {
        outTempo.innerText = "Minutos Disponíveis: " + tempo;
        outTroco.innerText = "Troco: R$ " + valor.toFixed(2); //toFixed() arredonda o número para cima
      }
    }


})
