let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let btn = document.getElementById("btn");
let erro = document.getElementById("erro");
// console.log(nome.value, senha.value);


btn.addEventListener("click",() =>{
    erro.textContent = nome.value.trim() === "" || senha.value.trim() === ""
    ? "Preencha todos os campos"
    :"";

    if (erro.textContent !== "") return;

    console.log(`Nome: ${nome.value} \nSenha: ${senha.value}`);
});