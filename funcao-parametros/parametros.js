const frm = document.querySelector("form");
const resultado = document.querySelector("h4")
const frase = document.getElementById("idFrase");
const add = document.getElementById("idAdd");
const index = document.getElementById("idIndice");

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const frase = frm.querySelector("#idFrase").value.toUpperCase();
    const add = frm.querySelector("#idAdd").value.toUpperCase();
    const indexes = frm.querySelector("#idIndice").value.split(" ").map(Number);

    let index = frm.idIndice.value.split(" ");

    index = index.map((elem) => Number(elem));

    insertString(frase, add, indexes)

    frm.reset(); //para limpar o formulário 
    frm.querySelector("#idFrase").focus(); //definir o foco no campo da frase

});

function insertString(str, toInsert, indexes){

    const charArray = str.split('');  //valor não se altera
    let insertCount = 0; //escopo local
    //char = global
    for(let i = 0; i <= str.length; i++){
       //console.log(str[i]);
        if(indexes.includes(i)){
            charArray.splice(i + insertCount, 0, toInsert, " ");
            insertCount++;
        }
    }

    resultado.innerText = charArray.join("");
    
}
