const frm = document.querySelector("form") // Obtendo o formulário do HTML
const resultElement = document.querySelector("h4") // Obtendo o elemento <h4> para exibir o resultado
const romanInput = document.getElementById("romanInput"); // Obtendo o campo de entrada do número romano

//inicializando uma função ao clicar no botão
frm.addEventListener("submit", (e) => {

    //impedindo que envie os formularios
    e.preventDefault()

    // Obtendo o número romano digitado pelo usuário
    let romanNumber = romanInput.value.toUpperCase(); // .toUpperCase para deixar os números romanos em letra Maiúscula.

    // Verificando se a entrada está vazia
    if (romanNumber === "") {
        resultElement.innerText = "Entrada inválida - Por favor, insira um número romano.";
        return;
    }

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

    // Convertendo um número romano em decimal usando um loop while
    while (i < romanNumber.length) { // while vai percorrer o número romano, realizando adições ou subtrações com base na comparação dos algarismos adjacentes
        const currentRomanValue = romanValues[romanNumber[i]]; // Valor do algarismo romano atual

        // Verificando se o valor atual não está definido em romanValues
        if (currentRomanValue === undefined) {
            resultElement.innerText = "Valor inválido - Por favor, insira um número romano válido.";

            romanInput.value = ""; //Limpa o campo de entrada
            romanInput.focus(); //Dá foco ao campo de entrada novamente

            return;
        }

        const nextRomanValue = romanValues[romanNumber[i + 1]]; // Valor do próximo algarismo romano

        if (nextRomanValue && currentRomanValue < nextRomanValue) {
            decimalNumber += nextRomanValue - currentRomanValue; // Subtração: adiciona a diferença entre os valores do próximo algarismo e do algarismo atual
            i += 2; // Pula dois caracteres (valor atual e próximo)
        } else {
            decimalNumber += currentRomanValue; // Adição: adiciona o valor do algarismo atual
            i++; // Pula apenas um caractere (valor atual) para verificar o próximo algarismo
        }
    }

    romanInput.value = ""; //Limpa o campo de entrada
    romanInput.focus(); //Dá foco ao campo de entrada novamente

    // Exibindo o resultado na tela
    resultElement.innerText = `O número decimal correspondente a "${romanNumber}" é: ${decimalNumber}`;

});
