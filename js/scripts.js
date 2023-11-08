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
  let check = document.getElementById("integrar").checked;
  console.log(check)

  if (sEscolhida > 203 || sEscolhida < 201) {
    window.alert(
      "Sala não existe, apenas as salas 201, 202 e 203 estão disponíveis"
    );
    isAvailable = false;
  }
  // Loop para verificar disponibilidade de sala e horário
  for (let i = 0; i < hOcupados.length; i++) {
    if (hOcupados[i][0] == hEscolhido && hOcupados[i][1] == sEscolhida) {
      isAvailable = false;
      break;
    }
  }

  // Verifica se o for achou algo igual
  if (isAvailable == true && check) {
    window.alert(
      "Horário Disponível, reserva Concluída e Integrada ao seu calendário!"
    );
    hOcupados.push([hEscolhido, sEscolhida]);
  } else if (isAvailable == true && check != "on") {
    window.alert("Horário Disponível, reserva Concluída!");
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

///////////////////////

//integração do calendário
// document
//   .getElementById("add-to-calendar-button")
//   .addEventListener("click", function () {
//     const eventDetails = {
//       text: "Nome do Evento",
//       dates: "20231108T100000/20231108T120000", // Formato: AAAAMMDDTHHMMSS/AAAAMMDDTHHMMSS
//       location: "Localização do Evento",
//       details: "Descrição do Evento",
//     };

//     const encodedText = encodeURIComponent(eventDetails.text);
//     const encodedDates = encodeURIComponent(eventDetails.dates);
//     const encodedLocation = encodeURIComponent(eventDetails.location);
//     const encodedDetails = encodeURIComponent(eventDetails.details);

//     const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodedText}&dates=${encodedDates}&location=${encodedLocation}&details=${encodedDetails}`;

//     window.open(googleCalendarUrl, "_blank");
//   });
