let hOcupados = [
// HORARIO   'SALA
  ["08:30", "201"],
  ["16:15", "202"],
  ["22:15", "203"],
];

function Reservar() {
  let sEscolhida = document.getElementById("sala").value;
  let hEscolhido = document.getElementById("horario").value;
  let isAvailable = true;

  // Loop para verificar disponibilidade de sala e horário
  for (let i = 0; i < hOcupados.length; i++) {
    if (hOcupados[i][0] == hEscolhido && hOcupados[i][1] == sEscolhida) {
      isAvailable = false;
      break;
    }
  }
  
  // Verifica se o for achou algo igual
  if (isAvailable == true) {
    window.alert("Horário Disponível. Cadastro feito com sucesso!");
    hOcupados.push([hEscolhido, sEscolhida]);
  } else {
    window.alert("Horário Indisponível. Tente outro horário.");
  }
  atualizaLista();
}



function atualizaLista() {
  document.querySelector("#salas").innerHTML = "";
  //Gerar a lista de reservas
  for (let i = 0; i < hOcupados.length; i++) {
    let novoItem = document.createElement("li");
    novoItem.innerHTML =
      "Sala: " + hOcupados[i][1] + " Horário: " + hOcupados[i][0];
    document.querySelector("#salas").appendChild(novoItem);
  }
}

// Inicializar a lista no HTML;
atualizaLista();
