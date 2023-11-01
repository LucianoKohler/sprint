// function Login() {
//   const loginForm = document.getElementById("login-form");
//   const usernameInput = document.getElementById("username");
//   const passwordInput = document.getElementById("password");
//   const loginStatus = document.getElementById("login-status");

//   loginForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const username = usernameInput.value;
//     const password = passwordInput.value;

//     if (username === "seu_usuario" && password === "sua_senha") {
//       loginStatus.textContent = "Login bem-sucedido!";
//       // Você pode redirecionar o usuário ou executar ações adicionais aqui
//     } else {
//       loginStatus.textContent = "Credenciais inválidas. Tente novamente.";
//     }
//   });
// }

let admUser = {
  userName: "admin",
  password: "adm123",
};

let user = {
  userName: "user",
  password: "user123",
};

function ValidaLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == admUser.userName && password == admUser.password) {
    alert("Login efetuado com sucesso, olá senhor adm!");
    window.location.href = "reserva.html";
} else if (username == user.userName && password == user.password) {
    alert("Login efetuado com sucesso, olá senhor usuário!");
    window.location.href = "reserva.html";
  } else {
    alert("Login ou senha incorretos, tente novamente!");
  }
}
