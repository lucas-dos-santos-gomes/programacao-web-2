const form = document.querySelector("form");
const studentName = document.querySelector("#student-name");
const genders = document.querySelectorAll(".gender");
const grades = document.querySelectorAll(".grade");
const displayMedia = document.querySelector(".display-media");
const displaySituation = document.querySelector(".display-situation");

function sumGrades(array) {
  const newArray = Array.from(array);
  return newArray.reduce((acc, cur) => acc + Number(cur.value), 0);
}

function calcMedia(array) {
  return sumGrades(array) / array.length;
}

function showMedia(media) {
  displayMedia.innerHTML = `Média das notas: ${media.toFixed(1)}`;
  return media;
}

function showSituation(media, gender) {
  if(media >= 6) {
    displaySituation.style.color = "#03730D"
    displaySituation.innerHTML = `Parabéns ${studentName.value}, você foi aprovad${gender}!`;
  } else {
    displaySituation.style.color = "#F22"
    displaySituation.innerHTML = `Sinto muito ${studentName.value}, mas você foi reprovad${gender}!`;
  }
}

function setGender(array) {
  const genderList = Array.from(array);
  return genderList.filter(e => e.checked);
}

form.onsubmit = (event) => {
  event.preventDefault();
  const gender = setGender(genders)[0].id === "male" ? 'o' : 'a';
  const media = calcMedia(grades);
  showSituation(showMedia(media), gender);
}