const form = document.querySelector(".list-form");
const patientsInput = document.querySelector("#patients-name");
const buttons = {
  add: document.querySelector(".add-button"),
  urgency: document.querySelector(".urgency-button"),
  assist: document.querySelector(".assist-button")
}
const patient = document.querySelector(".patient");
const patientsList = document.querySelector(".patient-list");

let patientsArray = [];

const clearInput = () => {
  patientsInput.value = "";
  patientsInput.focus();
}

const innerPatients = () => {
  patientsList.innerHTML = "";
  patientsArray.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    patientsList.appendChild(li);
  });
}

form.onsubmit = e => {
  e.preventDefault();

  if(patientsArray.length === 15) {
    alert("Número máximo de pacientes foi atingido!");
    clearInput();
    return;
  }

  (e.submitter === buttons.add) && addPatient("push");
  (e.submitter === buttons.urgency) && addPatient("unshift");

  innerPatients();

  clearInput();
}

function addPatient(method) {
  if(patient.innerHTML === "Ninguém") {
    patient.innerHTML = patientsInput.value;
    patient.style.color = "#00F";
  } else {
    method === "push" && patientsArray.push(patientsInput.value);
    method === "unshift" && patientsArray.unshift(patientsInput.value);
  }
}

buttons.assist.onclick = () => {
  if(patientsInput.value === "") {
    if(patientsArray.length === 0) {
      alert("Nenhum paciente para ser atendido.");
    } else {
      patient.innerHTML = patientsArray[0];
      patientsArray.shift();
      innerPatients();
    }
  } else {
    patient.innerHTML = patientsInput.value;
  }
  clearInput();
}