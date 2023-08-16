const generateButton = document.getElementById('generateButton');
const numberInput = document.getElementById('numberInput');
const tabuadaOutput = document.getElementById('tabuadaOutput');
const form = document.querySelector('form');

const createTabuada = () => {
  const number = parseInt(numberInput.value);
  tabuadaOutput.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    const entry = document.createElement('p');
    entry.textContent = `${number} x ${i} = ${result}`;
    tabuadaOutput.appendChild(entry);
  }
}

form.onsubmit = e => {
  e.preventDefault();
  createTabuada();
}