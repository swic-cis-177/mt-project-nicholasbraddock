import data from "./data.js";
import { clients, createCurrentClients } from "./lib.js";
const form = document.querySelector("form");

const display = (clientData) => {
  createCurrentClients(clientData);
};

display(data);

form.addEventListener("submit", function () {
  event.preventDefault();

  data.push(clients(event.target.elements));
  display(data);
});
