const frm = document.querySelector("form")
const resultElement = document.querySelector("h4")
const romanInput = document.getElementById("romanInput");

//inicializando uma função ao clicar no botão
frm.addEventListener("submit", (e) => {

    //impedindo que envie os formularios
    e.preventDefault()

    // Obtendo o número romano digitado pelo usuário
    let romanNumber = romanInput.value.toUpperCase(); // .toUpperCase para deixar os números romanos em letra Maiúscula.

    // Verificando se a entrada está vazia
    if (!romanNumber) {
        resultElement.textContent = "Entrada inválida - Por favor, insira um número romano.";
        return;
    }

    // Convertendo um número romano em decimal usando um loop while
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let decimalNumber = 0;
    let i = 0;

    while (i < romanNumber.length) { // while vai percorrer o número romano, realizando adições ou subtrações com base na comparação dos algarismos adjacentes
      const currentRomanValue = romanValues[romanNumber[i]]; // Valor do algarismo romano atual
      const nextRomanValue = romanValues[romanNumber[i + 1]]; // Valor do próximo algarismo romano
  
      if (nextRomanValue && currentRomanValue < nextRomanValue) {
        decimalNumber += nextRomanValue - currentRomanValue; // Subtração: adiciona a diferença entre os valores do próximo algarismo e do algarismo atual
        i += 2; // Pula dois caracteres (valor atual e próximo)
      } else {
        decimalNumber += currentRomanValue; // Adição: adiciona o valor do algarismo atual
        i++; // Pula apenas um caractere (valor atual) para verificar o próximo algarismo
      }
    }

    // Exibindo o resultado na tela
    resultElement.innerText = `O número decimal correspondente a "${romanNumber}" é: ${decimalNumber}`;

});
