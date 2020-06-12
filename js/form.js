var FormLink = document.querySelector(".button-brown");
var Form = document.querySelector(".search-form");
var DataOn = Form.querySelector("#data-coming");
var DataOut = Form.querySelector("#data-out");
var Adults = Form.querySelector("#adults");
var Kids = Form.querySelector("#children");



FormLink.addEventListener("click", function () {
  Form.classList.toggle("search-form-show");
  DataOn.focus();
});

Form.addEventListener("submit", function (evt) {
  if (!DataOn.value || !DataOut.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("adults", Adults.value);
  }
});