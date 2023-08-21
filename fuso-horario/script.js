const form = document.querySelector("form");

function calcularFuso() {
  // cria uma referência aos elementos da página
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraFranca = document.getElementById("outHoraFranca");
  // obtém e converte o conteúdo do campo inHoraBrasil
  var horaBrasil = Number(inHoraBrasil.value);
  // se não preencheu ou Not-a-Number (NaN)
  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Informe a hora no Brasil corretamente"); // exibe alerta
    inHoraBrasil.focus(); // posiciona em inHoraBrasil
  return;
  }
  var horaFranca = horaBrasil + 5; // calcula o horário na França
  // se passar das 24 horas na Franca ...
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24; // ... subtrai 24
  }
  // exibe resposta (altera conteúdo do elemento outHoraFranca)
  horaFranca = String(horaFranca.toFixed(2));
  outHoraFranca.textContent = "Hora na França: " + horaFranca.replace(".", "h");
}
// cria uma referência ao elemento btExibir e registra evento associado a function
form.onsubmit = e => {
  e.preventDefault();
  calcularFuso();
}