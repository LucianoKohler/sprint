function Login (){
  const loginForm = document.getElementById('login-form');
          const usernameInput = document.getElementById('username');
          const passwordInput = document.getElementById('password');
          const loginStatus = document.getElementById('login-status');
  
          loginForm.addEventListener('submit', function(event) {
              event.preventDefault();
              const username = usernameInput.value;
              const password = passwordInput.value;
  
              if (username === 'seu_usuario' && password === 'sua_senha') {
                  loginStatus.textContent = 'Login bem-sucedido!';
                  // Você pode redirecionar o usuário ou executar ações adicionais aqui
              } else {
                  loginStatus.textContent = 'Credenciais inválidas. Tente novamente.';
              }
          });
      }
  
      Login