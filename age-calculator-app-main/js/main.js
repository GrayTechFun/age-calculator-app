const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const img = document.querySelector(".img");
const h51 = document.querySelector(".h51");
const h52 = document.querySelector(".h52");
const h53 = document.querySelector(".h53");

const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");

const date = new Date();
const years = date.getFullYear();
const months = date.getMonth();
const days = date.getDay();

const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");

img.addEventListener("click", (e) => {
  if (day.value === "" || day.value === null) {
    day.style.borderColor = "red";
    h51.style.color = "red";
    error1.innerText = "This field is required";
  } else if (day.value < 1 || day.value > 31) {
    day.style.borderColor = "red";
    h51.style.color = "red";
    error1.innerText = "Must be a valid day";
  } else {
    day.style.borderColor = "gray";
    h51.style.color = "gray";
    error1.innerText = "";
  }

  if (month.value === "" || month.value === null) {
    month.style.borderColor = "red";
    h52.style.color = "red";
    error2.innerText = "This field is required";
  } else if (month.value < 1 || month.value > 12) {
    month.style.borderColor = "red";
    h52.style.color = "red";
    error2.innerText = "Must be a valid month";
  } else {
    month.style.borderColor = "gray";
    h52.style.color = "gray";
    error2.innerText = "";
  }

  if (year.value === "" || year.value === null) {
    year.style.borderColor = "red";
    h53.style.color = "red";
    error3.innerText = "This field is required";
  } else if (year.value < 0 || year.value > years) {
    day.style.borderColor = "red";
    h53.style.color = "red";
    error3.innerText = "Must be a valid year";
  } else {
    year.style.borderColor = "gray";
    h53.style.color = "gray";
    error3.innerText = "";
  }

  span1.innerText = years - year.value;
  span2.innerText = 12 - month.value;
  span3.innerText = 31 - day.value;
});
