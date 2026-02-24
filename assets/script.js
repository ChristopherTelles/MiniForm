let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let btn = document.getElementById("btn");
let btn_olho = document.getElementById("btn-olho");
let erro = document.getElementById("erro");
// console.log(nome.value, senha.value);

btn.addEventListener("click", () => {
  erro.textContent =
    nome.value.trim() === "" || senha.value.trim() === ""
      ? "Preencha todos os campos"
      : "";

  if (erro.textContent !== "") return;

  console.log(`Nome: ${nome.value} \nSenha: ${senha.value}`);
});

btn_olho.addEventListener("click", function () {
  if (senha.type === "password") {
    senha.type = "text";
    btn_olho.innerHTML =
      '<img class="olhos" src="assets/icon/olho-aberto.png" alt="" />';
  } else {
    senha.type = "password";
    btn_olho.innerHTML =
      '<img class="olhos" src="assets/icon/olho-fechado.png" alt="" />';
  }
});
