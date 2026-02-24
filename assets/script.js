let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let btn = document.getElementById("btn");
let btn_olho = document.getElementById("btn-olho");
let erro = document.getElementById("erro");
// console.log(nome.value, senha.value);

btn.addEventListener("click", () => {
  if (nome.value.trim() === "" || senha.value.trim() === "") {
    erro.textContent = "Preencha todos os campos";
    erro.style.color = "red";
    return;
  }

  if (senha.value.length < 4) {
    erro.textContent = "A senha deve conter pelo menos 4 caracteres";
    erro.style.color = "red";
    return;
  }

  if (nome.value.length < 3) {
    erro.textContent = "O nome deve conter pelo menos 3 caracteres";
    erro.style.color = "red";
    return;
  }

  // Se chegou aqui, está tudo certo
  erro.textContent = "Login válido ✔";
  erro.style.color = "green";
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
