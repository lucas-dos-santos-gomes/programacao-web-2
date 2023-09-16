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

form.onsubmit = e => {
  e.preventDefault();
  (e.submitter === buttons.add) && addPatient("push");
  (e.submitter === buttons.urgency) && addPatient("unshift");

  patientsList.innerHTML = "";

  patientsArray.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    patientsList.appendChild(li);
  });

  patientsInput.value = "";
  patientsInput.focus();
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