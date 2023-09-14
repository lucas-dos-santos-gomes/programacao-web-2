const foodItems = document.querySelectorAll(".order-items input");
const selectItems = document.querySelectorAll(".type-items select");
const details = document.querySelector(".detalhes");
const button = document.querySelector("#adicionar-detalhe");
const pre = document.querySelector("pre");

function hiddenSelects() {
  foodItems.forEach(e1 => {
    if(e1.checked) {
      selectItems.forEach(e2 => {
        e2.classList.add("hidden");
        if(e1.id === e2.classList[0]) {
          e2.classList.remove("hidden");
        }
      });
    }
    e1.onclick = hiddenSelects;
  });
}

hiddenSelects();
button.onclick = () => {
  foodItems.forEach(e => {
    if(e.checked) {
      const select = document.querySelector(`.${e.id}`);
      pre.innerHTML += `\n${select.selectedOptions[0].innerText} ${(details.value != "") ? ("(" + details.value + ")") : ""}
      `;
    }
  });
  details.value = "";
}