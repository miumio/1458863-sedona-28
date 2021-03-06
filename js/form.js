var formLink = document.querySelector(".js-form");
var form = document.querySelector(".search-form");
var dataOn = form.querySelector("#data-coming");
var dataOut = form.querySelector("#data-out");
var adults = form.querySelector("#adults");

form.classList.add('search-form-hide');

formLink.addEventListener("click", function () {
  form.classList.toggle("search-form-hide");
  form.classList.remove("search-form-error");
  dataOn.focus();
});

form.addEventListener("submit", function (evt) {
  if (!dataOn.value || !dataOut.value) {
    evt.preventDefault();
    form.classList.add("search-form-error");
  } else {
    localStorage.setItem("adults", adults.value);
  }
});