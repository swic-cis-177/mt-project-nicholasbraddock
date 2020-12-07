import { processForm } from "./lib.js";
const form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();

  processForm(event.target.elements);
});
