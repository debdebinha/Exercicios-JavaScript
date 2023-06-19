//Criar referências aos elementos da pagina
const frm = document.querySelector("form")

const outResposta = document.querySelector("h4")
const outSoma = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    let numero = Number(frm.inNumero.value);
  
    let soma = 0;
    let resposta = "";

    //evita o envio do formulario
    e.preventDefault();

    //cria uma variavel do tipo String que irá mostrar as respostas
    for (var i= 1; i <= 10; i++){
        soma += numero*i;
        resposta = resposta + numero + "x" + i + " = " + numero*i + "\n";
        }
        //o conteudo da tag pre será alterado com a variavel resposta
        outResposta.innerText = resposta;
        outSoma.innerText = "Soma total: " + soma;
    

}
)
