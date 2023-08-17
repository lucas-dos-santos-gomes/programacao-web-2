const form = document.querySelector('form');

form.onsubmit = e => {
  e.preventDefault();
  const firstNumber = parseInt(document.getElementById('firstNumber').value);
  const secondNumber = parseInt(document.getElementById('secondNumber').value);

  let evenNumbers = [];
  let oddNumbers = [];

  for (let num = firstNumber; num <= secondNumber; num++) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }

  const message = `Números pares entre ${firstNumber} e ${secondNumber}: ${evenNumbers.join(', ')}\n` + `Números ímpares entre ${firstNumber} e ${secondNumber}: ${oddNumbers.join(', ')}`;
  
  alert(message);
}
