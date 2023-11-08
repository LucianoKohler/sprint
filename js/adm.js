const url = window.location.href;

if(url.includes("?acctype=adm")){
  document.getElementById("adm").style.display = "inline";
}

function gerarRelatorio(){
  let lista = document.getElementById("salas")
  let nDeReservas = lista.getElementsByTagName("li")
  window.alert("Hoje, foram feitas " + nDeReservas.length + " reservas.")
}