const form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();

  const formDataHuman = {};
  for (let i = 0; i <= 15; i++) {
    formDataHuman[event.target.elements[i].id] = event.target.elements[i].value;
  }

  console.log(formDataHuman);
});
