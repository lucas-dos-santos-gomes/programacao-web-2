const foodItems = document.querySelectorAll(".order-items input");
const selectItems = document.querySelectorAll(".type-items select");

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
  });
}

foodItems.forEach(e => {
  e.onclick = hiddenSelects;
});

hiddenSelects();